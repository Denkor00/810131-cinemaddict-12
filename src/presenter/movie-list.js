import SortView, {SortType} from '../view/sort.js';
import FilmContainerView from '../view/films-container.js';
import FilmListView from '../view/films-list.js';
import FilmsListContainerView from '../view/films-list-container.js';
import ShowMoreButtonView from '../view/show-more-button.js';
import NoFilmView from '../view/no-film.js';
import {render, RenderPosition, remove} from '../utils/render.js';
import {sortByDate, sortByRating} from '../utils/film.js';
import FilmPresenter from './film.js';
import {UserAction, UpdateType} from '../const.js';
import {filter} from '../utils/filter.js';
import LoadingView from '../view/loading.js';

const CountType = {
  COMMON_FILMS: 20,
  EXTRA_FILMS: 2,
  RENDER_FOR_STEP: 5,
};

export default class MovieList {
  constructor(mainElement, bodyElement, moviesModel, filterModel, api) {
    this._moviesModel = moviesModel;
    this._filterModel = filterModel;
    this._filmsComments = null;
    this._api = api;

    this._bodyElement = bodyElement; // body страницы
    this._mainElement = mainElement; // родитель для всех элементов ниже
    this._sortElement = null;
    this._filmsContainerElement = new FilmContainerView(); // главный контейнер для фильмов
    this._filmsListElement = new FilmListView(); // первый внут. контейнер для всех фильмов
    this._filmsListContainerElement = new FilmsListContainerView(); // второй внут. контейнер для фильмов, в нем распорожены фильмы
    this._loadingElement = new LoadingView();
    this._showMoreButtonElement = null;
    this._noFilmElement = new NoFilmView();
    this._renderFilmCount = CountType.RENDER_FOR_STEP;
    this._isLoading = true;

    this._handleShowMoreButtonElementClick = this._handleShowMoreButtonElementClick.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);

    this._currentSortType = SortType.DEFAULT;
    this._filmPresenter = {};
    this._moviesModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  init() {
    this._renderBoard();
  }

  _getFilms() {
    const filterType = this._filterModel.getFilter();
    const films = this._moviesModel.getFilms();
    const filteredFilms = filter[filterType](films);

    switch (this._currentSortType) {
      case SortType.DATE:
        return filteredFilms.sort(sortByDate);
      case SortType.RATING:
        return filteredFilms.sort(sortByRating);
    }

    return filteredFilms;
  }

  _handleModeChange() {
    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  // -------сортировка
  _renderSort() {
    if (this._sortElement !== null) {
      this._sortElement = null;
    }
    this._sortElement = new SortView(this._currentSortType);
    this._sortElement.setSortTypeChangeHandler(this._handleSortTypeChange);
    render(this._mainElement, this._sortElement, RenderPosition.BEFOREEND);
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }
    this._currentSortType = sortType;
    this._clearBoard({resetRenderedTaskCount: true});
    this._renderBoard();
  }
  // -----конец сортировки

  _renderBoard() {
    if (this._isLoading) {
      this._renderLoading();
      return;
    }
    const films = this._getFilms();
    const filmCount = films.length;

    if (filmCount === 0) {
      this._renderNoFilmElement();
      return;
    }

    this._renderSort();
    render(this._mainElement, this._filmsContainerElement, RenderPosition.BEFOREEND);
    render(this._filmsContainerElement, this._filmsListElement, RenderPosition.BEFOREEND);
    render(this._filmsListElement, this._filmsListContainerElement, RenderPosition.BEFOREEND);

    this._renderFilms(films.slice(0, Math.min(filmCount, this._renderFilmCount)));

    if (filmCount > this._renderFilmCount) {
      this._renderShowMoreButton();
    }
  }

  _renderFilms(films) {
    films.forEach((film) => this._renderFilm(this._filmsListContainerElement, film));
  }

  // отрисовка карточки с фильмом и добавление событий
  _renderFilm(container, film) {
    const filmPresenter = new FilmPresenter(container, this._bodyElement, this._handleViewAction, this._handleModeChange, this._api);
    filmPresenter.init(film);
    this._filmPresenter[film.id] = filmPresenter;
  }

  _renderNoFilmElement() {
    render(this._filmsListElement, this._noFilmElement, RenderPosition.BEFOREEND);
  }

  _renderShowMoreButton() {
    if (this._showMoreButtonElement !== null) {
      this._showMoreButtonElement = null;
    }
    this._showMoreButtonElement = new ShowMoreButtonView();
    this._showMoreButtonElement.setClickHandler(this._handleShowMoreButtonElementClick);
    render(this._filmsListElement, this._showMoreButtonElement, RenderPosition.BEFOREEND);
  }

  _renderLoading() {
    render(this._mainElement, this._loadingElement, RenderPosition.BEFOREEND);
  }

  _handleShowMoreButtonElementClick() {
    const filmCount = this._getFilms().length;
    const newRenderFilmCount = Math.min(filmCount, this._renderFilmCount + CountType.RENDER_FOR_STEP);
    const films = this._getFilms().slice(this._renderFilmCount, newRenderFilmCount);
    this._renderFilms(films);
    this._renderFilmCount = newRenderFilmCount;

    if (this._renderFilmCount >= filmCount) {
      remove(this._showMoreButtonElement);
    }
  }

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case UserAction.UPDATE_FILM:
        this._api.updateFilm(update).then((response) => {
          this._moviesModel.updateFilm(updateType, response);
        });
        break;
      case UserAction.DELETE_COMMENT:
        // при удалении меняется надпись на кнопке
        const deletedCommentButtonElement = document.querySelector(`.film-details__comment-delete[data-comment-id="${update.deletedIdComment}"]`);
        deletedCommentButtonElement.setAttribute(`disabled`, true);
        deletedCommentButtonElement.textContent = `Deleting`;
        this._api.deleteComment(update.deletedIdComment)
          .then(() => {
            this._moviesModel.updateFilm(updateType, update);
          })
          .catch(() => {
            // при ошибке удаляемый коментарий трясется
            document.querySelector(`.film-details__comment[data-comment-id="${update.deletedIdComment}"]`).classList.add(`shake`);
          });
        break;
      case UserAction.ADD_COMMENT:
        const commentInputElement = document.querySelector(`.film-details__comment-input`);
        commentInputElement.setAttribute(`disabled`, true);
        this._api.addComment(update)
          .then((response) => {
            this._moviesModel.updateFilm(updateType, response);
          })
          .catch(() => {
            // при ошибке форма с полем ввода комментария трясется
            commentInputElement.removeAttribute(`disabled`);
            document.querySelector(`.film-details__new-comment`).classList.add(`shake`);
          });
    }
  }

  _handleModelEvent(updateType, data) {
    switch (updateType) {
      case UpdateType.MINOR:
        this._filmPresenter[data.id].init(data);
        break;
      case UpdateType.MAJOR:
        this._clearBoard({resetRenderedTaskCount: true, resetSortType: true});
        this._renderBoard();
        break;
      case UpdateType.INIT:
        this._isLoading = false;
        remove(this._loadingElement);
        this._renderBoard();
        break;
    }
  }

  _clearBoard({resetRenderedTaskCount = false, resetSortType = false} = {}) {
    const filmCount = this._getFilms().length;

    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.destroy());
    this._filmPresenter = {};

    remove(this._sortElement);
    remove(this._noFilmElement);
    remove(this._loadingElement);
    remove(this._showMoreButtonElement);

    if (resetRenderedTaskCount) {
      this._renderFilmCount = CountType.RENDER_FOR_STEP;
    } else {
      this._renderFilmCount = Math.min(filmCount, this._renderFilmCount);
    }
    if (resetSortType) {
      this._currentSortType = SortType.DEFAULT;
    }
  }
}
