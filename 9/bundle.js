/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_user_profile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/user-profile.js */ "./src/view/user-profile.js");
/* harmony import */ var _view_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/menu.js */ "./src/view/menu.js");
/* harmony import */ var _presenter_movie_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/movie-list.js */ "./src/presenter/movie-list.js");
/* harmony import */ var _view_statistics_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/statistics.js */ "./src/view/statistics.js");
/* harmony import */ var _mock_film_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock/film.js */ "./src/mock/film.js");
/* harmony import */ var _mock_user_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock/user.js */ "./src/mock/user.js");
/* harmony import */ var _mock_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/menu.js */ "./src/mock/menu.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/render.js */ "./src/utils/render.js");




 // функция создает мок для фильма
 // мок для пользователя
 // счет фильмов для меню


const COMMON_FILMS_COUNT = 20;

// создание моков для фильма
const commonFilms = new Array(COMMON_FILMS_COUNT).fill(``).map(_mock_film_js__WEBPACK_IMPORTED_MODULE_4__["generateFilm"]);
const filmsCount = commonFilms.length;
// счет фильмов для меню, для статуса пользователя
const filmsStatusCount = Object(_mock_menu_js__WEBPACK_IMPORTED_MODULE_6__["generateFilmsMenu"])(commonFilms);
// мок для пользователя
const user = Object(_mock_user_js__WEBPACK_IMPORTED_MODULE_5__["generateUser"])(filmsStatusCount);

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const footerStatisticsElement = document.querySelector(`.footer__statistics`);
const bodyElement = document.querySelector(`body`);

Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["render"])(headerElement, new _view_user_profile_js__WEBPACK_IMPORTED_MODULE_0__["default"](user), _utils_render_js__WEBPACK_IMPORTED_MODULE_7__["BEFOREEND"]);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["render"])(mainElement, new _view_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"](filmsStatusCount), _utils_render_js__WEBPACK_IMPORTED_MODULE_7__["BEFOREEND"]);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["render"])(footerStatisticsElement, new _view_statistics_js__WEBPACK_IMPORTED_MODULE_3__["default"](filmsCount), _utils_render_js__WEBPACK_IMPORTED_MODULE_7__["BEFOREEND"]);

// презентер
const moviePresenter = new _presenter_movie_list_js__WEBPACK_IMPORTED_MODULE_2__["default"](mainElement, bodyElement);
moviePresenter.init(commonFilms);


/***/ }),

/***/ "./src/mock/comment.js":
/*!*****************************!*\
  !*** ./src/mock/comment.js ***!
  \*****************************/
/*! exports provided: generateComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateComment", function() { return generateComment; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");


const EMOJIS = [
  `./images/emoji/smile.png`,
  `./images/emoji/sleeping.png`,
  `./images/emoji/puke.png`,
  `./images/emoji/angry.png`,
];
const COMMENTS_TEXT = [
  `Interesting setting and a good cast`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`
];
const AUTHORS = [
  `Tim Macoveev`,
  `John Doe`,
  `Ivan Ivanov`,
  `Petr Petrov`
];

const generateRandomDateForComment = () => {
  const start = new Date(2019, 10, 30);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const generateComment = () => ({
  id: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateId"])(),
  emoji: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomValueFromArray"])(EMOJIS),
  text: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomValueFromArray"])(COMMENTS_TEXT),
  author: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomValueFromArray"])(AUTHORS),
  time: generateRandomDateForComment(),
});


/***/ }),

/***/ "./src/mock/film.js":
/*!**************************!*\
  !*** ./src/mock/film.js ***!
  \**************************/
/*! exports provided: generateFilm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilm", function() { return generateFilm; });
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ "./src/mock/comment.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _utils_film_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/film.js */ "./src/utils/film.js");




const GENRE_TYPES = [
  `Musical`,
  `Western`,
  `Drama`,
  `Comedy`,
  `Cartoon`,
  `Film - Noir`,
  `Mystery`
];
const TITLES = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `The Great Flamarion`
];
const IMAGES = [
  `./images/posters/made-for-each-other.png`,
  `./images/posters/the-man-with-the-golden-arm.jpg`,
  `./images/posters/the-great-flamarion.jpg`,
  `./images/posters/the-dance-of-life.jpg`,
  `./images/posters/santa-claus-conquers-the-martians.jpg`,
  `./images/posters/sagebrush-trail.jpg`,
  `./images/posters/popeye-meets-sinbad.png`,
];
const SENTENCES = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`];

const MIN_GENRE_BOUND = 1;

const DescriptionSentences = {
  MIN: 1,
  MAX: 5,
};

const HourDuration = {
  MIN: 0,
  MAX: 1
};

const MinutesDuration = {
  MIN: 1,
  MAX: 60
};

const BooleanValue = {
  FALSE: 0,
  TRUE: 1
};

const RatingBound = {
  MIN: 1,
  MAX: 9
};

const CommentBound = {
  MIN: 0,
  MAX: 5
};

const generateDescription = (sentences) => sentences.slice(0, Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(DescriptionSentences.MIN, DescriptionSentences.MAX)).join(``);
const generateGenre = (genreTypes) => genreTypes.slice(0, Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(MIN_GENRE_BOUND, genreTypes.length - 1));

const generateDuration = () => ({
  hours: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(HourDuration.MIN, HourDuration.MAX),
  minutes: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(MinutesDuration.MIN, MinutesDuration.MAX),
});

const getRandomBooleanValue = () => Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(BooleanValue.FALSE, BooleanValue.TRUE));

const generateStatus = () => ({
  favorite: getRandomBooleanValue(),
  watched: getRandomBooleanValue(),
  watchlist: getRandomBooleanValue(),
});

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const generateFilm = () => {
  return {
    id: generateId(),
    image: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomValueFromArray"])(IMAGES),
    title: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomValueFromArray"])(TITLES),
    rating: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomDouble"])(RatingBound.MIN, RatingBound.MAX),
    director: `Anthony Mann`,
    writers: `Anne Wigton, Heinz Herald, Richard Weil`,
    actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
    releaseDate: Object(_utils_film_js__WEBPACK_IMPORTED_MODULE_2__["getRandomDate"])(),
    duration: generateDuration(),
    country: `USA`,
    genres: generateGenre(GENRE_TYPES),
    description: generateDescription(SENTENCES),
    comments: new Array(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(CommentBound.MIN, CommentBound.MAX)).fill(``).map(_comment_js__WEBPACK_IMPORTED_MODULE_0__["generateComment"]),
    ageRating: `18+`,
    status: generateStatus(),
  };
};


/***/ }),

/***/ "./src/mock/menu.js":
/*!**************************!*\
  !*** ./src/mock/menu.js ***!
  \**************************/
/*! exports provided: generateFilmsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilmsMenu", function() { return generateFilmsMenu; });
const countMapMenu = {
  favorite: (values) => values.filter((element) => element.favorite).length,
  watched: (values) => values.filter((element) => element.watched).length,
  watchlist: (values) => values.filter((element) => element.watchlist).length,
};

const generateFilmsMenu = (films) => {
  const statuses = films.map((element) => element.status);
  const result = {};

  Object.entries(countMapMenu).forEach(([countMapMenuName, countFilm]) => {
    result[countMapMenuName] = countFilm(statuses);
  });
  return result;
};


/***/ }),

/***/ "./src/mock/user.js":
/*!**************************!*\
  !*** ./src/mock/user.js ***!
  \**************************/
/*! exports provided: generateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUser", function() { return generateUser; });
const WatchCount = {
  NOVICE_LOW_BOUND: 1,
  NOVICE_UPPER_BOUND: 10,
  FAN_LOW_BOUND: 11,
  FAN_UPPER_BOUND: 20,
};

const generateUser = ({watched}) => {
  const {NOVICE_LOW_BOUND, NOVICE_UPPER_BOUND, FAN_LOW_BOUND, FAN_UPPER_BOUND} = WatchCount;

  let userRating = ``;
  switch (true) {
    case watched >= NOVICE_LOW_BOUND && watched <= NOVICE_UPPER_BOUND:
      userRating = `Novice`;
      break;
    case watched >= FAN_LOW_BOUND && watched <= FAN_UPPER_BOUND:
      userRating = `Fan`;
      break;
    case watched > FAN_UPPER_BOUND:
      userRating = `Movie Buff`;
  }

  return {
    profileRating: userRating,
    image: `images/bitmap@2x.png`
  };
};


/***/ }),

/***/ "./src/presenter/film.js":
/*!*******************************!*\
  !*** ./src/presenter/film.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Film; });
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_film_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/film-details.js */ "./src/view/film-details.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");





const Key = {
  ESCAPE: `Escape`,
  ESC: `Esc`,
  ENTER: `Enter`,
};

const Mode = {
  DEFAULT: `DEFAULT`,
  OPEN: `OPEN`
};

const EmojiType = {
  [`smile`]: `./images/emoji/smile.png`,
  [`sleeping`]: `./images/emoji/sleeping.png`,
  [`puke`]: `./images/emoji/puke.png`,
  [`angry`]: `./images/emoji/angry.png`,
};

class Film {
  constructor(container, bodyElement, changeDate, changeMode) {
    this._container = container;
    this._bodyElement = bodyElement;
    this._changeData = changeDate;
    this._changeMode = changeMode;

    this._handleEscKeyDown = this._handleEscKeyDown.bind(this);
    this._showFilmDetail = this._showFilmDetail.bind(this);
    this._handleWatchListClick = this._handleWatchListClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleDeleteButtonClick = this._handleDeleteButtonClick.bind(this);
    this._handleEnterKeyDown = this._handleEnterKeyDown.bind(this);

    this._filmCardElement = null;
    this._filmDetailElement = null;
    this._mode = Mode.DEFAULT;
  }

  init(film) {
    this._film = film;

    const prevFilmCardElement = this._filmCardElement;
    const prevFilmDetailElement = this._filmDetailElement;

    this._filmCardElement = new _view_film_card_js__WEBPACK_IMPORTED_MODULE_0__["default"](film);
    this._filmDetailElement = new _view_film_details_js__WEBPACK_IMPORTED_MODULE_1__["default"](film);

    this._filmCardElement.setClickHandler(this._showFilmDetail);

    this._filmDetailElement.setClickHandler(() => {
      this._hideFilmDetail();
      document.removeEventListener(`keydown`, this._handleEscKeyDown);
      document.removeEventListener(`keydown`, this._handleEnterKeyDown);
      this._filmDetailElement.reset(this._film);
    });
    this._filmCardElement.setWatchListClickHandler(this._handleWatchListClick);
    this._filmCardElement.setWatchedClickHandler(this._handleWatchedClick);
    this._filmCardElement.setFavoriteClickHandler(this._handleFavoriteClick);

    this._filmDetailElement.setWatchListClickHandler(this._handleWatchListClick);
    this._filmDetailElement.setWatchedClickHandler(this._handleWatchedClick);
    this._filmDetailElement.setFavoriteClickHandler(this._handleFavoriteClick);
    this._filmDetailElement.setDeleteButtonClickHandler(this._handleDeleteButtonClick);
    this._filmDetailElement.setEnterKeyDown(this._handleEnterKeyDown);

    if (prevFilmCardElement === null || prevFilmDetailElement === null) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(this._container, this._filmCardElement, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["BEFOREEND"]);
      return;
    }

    if (this._container.getElement().contains(prevFilmCardElement.getElement())) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._filmCardElement, prevFilmCardElement);
    }

    if (this._bodyElement.contains(prevFilmDetailElement.getElement())) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._filmDetailElement, prevFilmDetailElement);
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevFilmCardElement);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevFilmDetailElement);
  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._filmCardElement);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._filmDetailElement);
  }

  _handleEscKeyDown(evt) {
    if (evt.key === Key.ESCAPE || evt.key === Key.ESC) {
      evt.preventDefault();
      this._hideFilmDetail();
      document.removeEventListener(`keydown`, this._handleEscKeyDown);
      document.removeEventListener(`keydown`, this._handleEnterKeyDown);
      this._filmDetailElement.reset(this._film);
    }
  }

  _hideFilmDetail() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._filmDetailElement);

    this._bodyElement.classList.remove(`hide-overflow`);
    this._mode = Mode.DEFAULT;
  }

  _showFilmDetail() {
    this._changeMode();
    this._filmDetailElement.updateElement();
    this._bodyElement.appendChild(this._filmDetailElement.getElement());

    this._bodyElement.classList.add(`hide-overflow`);
    document.addEventListener(`keydown`, this._handleEscKeyDown);
    document.addEventListener(`keydown`, this._handleEnterKeyDown);
    this._mode = Mode.OPEN;
  }

  // изменения данных
  _handleWatchListClick() {
    this._changeData(Object.assign({}, this._film, {status: {watchlist: !this._film.status.watchlist, favorite: this._film.status.favorite, watched: this._film.status.watched}}));
  }

  _handleWatchedClick() {
    this._changeData(Object.assign({}, this._film, {status: {watched: !this._film.status.watched, favorite: this._film.status.favorite, watchlist: this._film.status.watchlist}}));
  }

  _handleFavoriteClick() {
    this._changeData(Object.assign({}, this._film, {status: {favorite: !this._film.status.favorite, watchlist: this._film.status.watchlist, watched: this._film.status.watched}}));
  }

  _handleDeleteButtonClick(commentId) {
    const newComments = this._film.comments.filter((comment) => comment.id !== parseInt(commentId, 10));
    this._changeData(Object.assign({}, this._film, {comments: newComments.slice(0)}));
  }

  _handleEnterKeyDown(evt) {
    if (evt.key === Key.ENTER) {
      const userMessage = this._filmDetailElement.returnUserMessage();
      const selectedEmojiType = this._filmDetailElement.returnSelectedEmojiType();
      if (userMessage && selectedEmojiType) {
        const userComment = {
          id: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["generateId"])(),
          emoji: EmojiType[selectedEmojiType],
          text: userMessage,
          author: `Anonim`,
          time: new Date(),
        };
        const newComments = this._film.comments.slice(0);
        newComments.push(userComment);
        this._changeData(Object.assign({}, this._film, {comments: newComments.slice(0)}));
      }
    }
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._hideFilmDetail();
      this._bodyElement.classList.add(`hide-overflow`);
    }
  }
}


/***/ }),

/***/ "./src/presenter/movie-list.js":
/*!*************************************!*\
  !*** ./src/presenter/movie-list.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieList; });
/* harmony import */ var _view_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/sort.js */ "./src/view/sort.js");
/* harmony import */ var _view_films_container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/films-container.js */ "./src/view/films-container.js");
/* harmony import */ var _view_films_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/films-list.js */ "./src/view/films-list.js");
/* harmony import */ var _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/films-list-container.js */ "./src/view/films-list-container.js");
/* harmony import */ var _view_films_list_top_rated_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/films-list-top-rated.js */ "./src/view/films-list-top-rated.js");
/* harmony import */ var _view_films_list_most_commented_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/films-list-most-commented.js */ "./src/view/films-list-most-commented.js");
/* harmony import */ var _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/show-more-button.js */ "./src/view/show-more-button.js");
/* harmony import */ var _view_no_film_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/no-film.js */ "./src/view/no-film.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_film_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/film.js */ "./src/utils/film.js");
/* harmony import */ var _film_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./film.js */ "./src/presenter/film.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");













const CountType = {
  COMMON_FILMS: 20,
  EXTRA_FILMS: 2,
  RENDER_FOR_STEP: 5,
};

class MovieList {
  constructor(mainElement, bodyElement) {
    this._bodyElement = bodyElement; // body страницы
    this._mainElement = mainElement; // родитель для всех элементов ниже
    this._sortElement = new _view_sort_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._filmsContainerElement = new _view_films_container_js__WEBPACK_IMPORTED_MODULE_1__["default"](); // главный контейнер для фильмов
    this._filmsListElement = new _view_films_list_js__WEBPACK_IMPORTED_MODULE_2__["default"](); // первый внут. контейнер для всех фильмов
    this._filmsListContainerElement = new _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_3__["default"](); // второй внут. контейнер для фильмов, в нем распорожены фильмы
    this._filmListTopRatedElement = new _view_films_list_top_rated_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._filmListMostCommentedElement = new _view_films_list_most_commented_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this._showMoreButtonElement = new _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this._noFilmElement = new _view_no_film_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this._renderFilmCount = CountType.RENDER_FOR_STEP;

    this._handleShomMoreButtonElementClick = this._handleShomMoreButtonElementClick.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._handleFilmChange = this._handleFilmChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);

    this._currenSortType = _view_sort_js__WEBPACK_IMPORTED_MODULE_0__["SortType"].DEFAULT;
    this._filmPresenter = {};
    this._filmTopRatedPresenter = {};
    this._filmMostCommentedPresenter = {};
  }

  init(films) {
    this._renderSort();
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._mainElement, this._filmsContainerElement, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["BEFOREEND"]);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._filmsContainerElement, this._filmsListElement, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["BEFOREEND"]);
    if (!films.length) {
      this._renderNoFilmElement();
      return;
    }
    this._sourceFilms = films.slice(); // сохраняем исходный массив для сортировки
    this._films = films.slice();
    this._topRatedFilms = films.slice().sort((firstFilm, secondFilm) => secondFilm.rating - firstFilm.rating);
    this._mostCommentedFilms = films.slice().sort((firstFilm, secondFilm) => secondFilm.comments.length - firstFilm.comments.length);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._filmsListElement, this._filmsListContainerElement, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["BEFOREEND"]);
    this._renderFilmsList();

    // отрисовка Top rated и Most commented компонентов с фильмами
    this._renderTopRatedBoard(this._topRatedFilms.slice(0, CountType.EXTRA_FILMS));
    this._renderMostCommentedBoard(this._mostCommentedFilms.slice(0, CountType.EXTRA_FILMS));
  }

  _handleModeChange() {
    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  // -------сортировка
  _renderSort() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._mainElement, this._sortElement, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["BEFOREEND"]);
    this._sortElement.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _handleSortTypeChange(sortType) {
    if (this._currenSortType === sortType) {
      return;
    }
    this._sortFilms(sortType);
    this._clearFilmList();
    this._renderFilmsList();
  }

  _sortFilms(sortType) {
    switch (sortType) {
      case _view_sort_js__WEBPACK_IMPORTED_MODULE_0__["SortType"].DATE:
        this._films.sort(_utils_film_js__WEBPACK_IMPORTED_MODULE_9__["sortByDate"]);
        break;
      case _view_sort_js__WEBPACK_IMPORTED_MODULE_0__["SortType"].RATING:
        this._films.sort(_utils_film_js__WEBPACK_IMPORTED_MODULE_9__["sortByRating"]);
        break;
      default:
        this._films = this._sourceFilms.slice();
    }
    this._currenSortType = sortType;
  }
  // -----конец сортировки

  // удаляет каждый фильм
  _clearFilmList() {
    Object.values(this._filmPresenter)
      .forEach((presenter) => presenter.destroy());
    this._filmPresenter = {};
    this._renderFilmCount = CountType.RENDER_FOR_STEP;
  }

  _renderTopRatedBoard(films) {
    const filmListContainerElement = new _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._filmsContainerElement, this._filmListTopRatedElement, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["BEFOREEND"]);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._filmListTopRatedElement, filmListContainerElement, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["BEFOREEND"]);
    films.forEach((film) => this._renderTopRatedFilm(filmListContainerElement, film));
  }

  _renderMostCommentedBoard(films) {
    const filmListContainerElement = new _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._filmsContainerElement, this._filmListMostCommentedElement, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["BEFOREEND"]);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._filmListMostCommentedElement, filmListContainerElement, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["BEFOREEND"]);
    films.forEach((film) => this._renderMostCommenterFilm(filmListContainerElement, film));
  }

  _renderFilmsList() {
    this._renderFilms(0, Math.min(this._films.length, CountType.RENDER_FOR_STEP));
    if (this._films.length > CountType.RENDER_FOR_STEP) {
      this._renderShowMoreButton();
    }
  }

  _renderFilms(from, to) {
    this._films
      .slice(from, to)
      .forEach((film) => this._renderFilm(this._filmsListContainerElement, film));
  }

  // отрисовка карточки с фильмом и добавление событий
  _renderFilm(container, film) {
    const filmPresenter = new _film_js__WEBPACK_IMPORTED_MODULE_10__["default"](container, this._bodyElement, this._handleFilmChange, this._handleModeChange);
    filmPresenter.init(film);
    this._filmPresenter[film.id] = filmPresenter;
  }

  _renderTopRatedFilm(container, film) {
    const filmPresenter = new _film_js__WEBPACK_IMPORTED_MODULE_10__["default"](container, this._bodyElement, this._handleFilmChange);
    filmPresenter.init(film);
    this._filmTopRatedPresenter[film.id] = filmPresenter;
  }

  _renderMostCommenterFilm(container, film) {
    const filmPresenter = new _film_js__WEBPACK_IMPORTED_MODULE_10__["default"](container, this._bodyElement, this._handleFilmChange);
    filmPresenter.init(film);
    this._filmMostCommentedPresenter[film.id] = filmPresenter;
  }

  _renderNoFilmElement() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._filmsListElement, this._noFilmElement, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["BEFOREEND"]);
  }

  _renderShowMoreButton() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["render"])(this._filmsListElement, this._showMoreButtonElement, _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["BEFOREEND"]);
    this._showMoreButtonElement.setClickHandler(this._handleShomMoreButtonElementClick);
  }

  _handleShomMoreButtonElementClick() {
    this._renderFilms(this._renderFilmCount, this._renderFilmCount + CountType.RENDER_FOR_STEP);
    this._renderFilmCount += CountType.RENDER_FOR_STEP;
    if (this._renderFilmCount >= this._films.length) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_8__["remove"])(this._showMoreButtonElement);
    }
  }

  // обработчик изменения данных - этот метод передается в presenter/film как changeData
  _handleFilmChange(updatedFilm) {
    this._films = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_11__["updateItem"])(this._films, updatedFilm);
    this._sourceFilms = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_11__["updateItem"])(this._sourceFilms, updatedFilm);
    this._filmPresenter[updatedFilm.id].init(updatedFilm); // инициализация фильма с изм. данными
  }
}


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: getRandomInteger, getRandomValueFromArray, getRandomDouble, updateItem, generateId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomValueFromArray", function() { return getRandomValueFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDouble", function() { return getRandomDouble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateId", function() { return generateId; });
const getRandomInteger = (min = 0, max = 1) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomValueFromArray = (values) => values[getRandomInteger(0, values.length - 1)];

const getRandomDouble = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));

  return (lower + Math.random() * (upper - lower + 1)).toFixed(1);
};

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);


/***/ }),

/***/ "./src/utils/film.js":
/*!***************************!*\
  !*** ./src/utils/film.js ***!
  \***************************/
/*! exports provided: getRandomDate, getHumanizeViewFromDuration, sortByDate, sortByRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDate", function() { return getRandomDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHumanizeViewFromDuration", function() { return getHumanizeViewFromDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDate", function() { return sortByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByRating", function() { return sortByRating; });
const getRandomDate = () => {
  const start = new Date(1940, 10, 30);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const getHumanizeViewFromDuration = ({hours, minutes}) => {
  let humanizeTimeString = ``;
  humanizeTimeString += hours ? `${hours}h ` : ``;
  humanizeTimeString += minutes ? `${minutes}m` : ``;

  return humanizeTimeString;
};

const sortByDate = (firstFilm, secondFilm) => secondFilm.releaseDate.getTime() - firstFilm.releaseDate.getTime();

const sortByRating = (firstFilm, secondFilm) => secondFilm.rating - firstFilm.rating;


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: BEFOREEND, renderTemplate, render, createElement, remove, replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFOREEND", function() { return BEFOREEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./src/view/abstract.js");


const BEFOREEND = `beforeend`;

const renderTemplate = (container, template, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container.getElement();
  }
  container.insertAdjacentHTML(place, template);
};

const render = (container, child, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }
  if (child instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }

  if (place === BEFOREEND) {
    container.append(child);
  } else {
    throw new Error(`Передано некорректное place в функцию render`);
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const remove = (component) => {
  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }
    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`getTemplate method Abstract class`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: createFilmCardTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmCardTemplate", function() { return createFilmCardTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCard; });
/* harmony import */ var _utils_film_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/film.js */ "./src/utils/film.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");




const getStringYearFromDate = (releaseDate) => {
  let date = releaseDate.toLocaleString(`en-GB`, {day: `numeric`, month: `long`, year: `numeric`});
  return date.slice(date.length - 4, date.length);
};

const createFilmCardTemplate = (film) => {

  const {title, rating, releaseDate, duration, genres, image, description, comments, status} = film;
  const {favorite, watched, watchlist} = status;
  const genre = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomValueFromArray"])(genres);
  const year = getStringYearFromDate(releaseDate);
  const humanizeDuration = Object(_utils_film_js__WEBPACK_IMPORTED_MODULE_0__["getHumanizeViewFromDuration"])(duration);

  return `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${humanizeDuration}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="${image}" alt="" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <a class="film-card__comments">${comments.length} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchlist ? `film-card__controls-item--active` : ``}">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watched ? `film-card__controls-item--active` : ``}">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${favorite ? `film-card__controls-item--active` : ``}">Mark as favorite</button>
      </form>
    </article>`;
};

class FilmCard extends _abstract_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(film) {
    super();
    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);

    this._watchListClickHandler = this._watchListClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  _clickHandler() {
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement()
      .querySelectorAll(`.film-card__poster, .film-card__comments, .film-card__title`)
      .forEach((element) => {
        element.addEventListener(`click`, this._clickHandler);
      });
  }

  setWatchListClickHandler(callback) {
    this._callback.watchListClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._watchListClickHandler);
  }

  _watchListClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchListClick();
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._watchedClickHandler);
  }

  _watchedClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchedClick();
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }
}


/***/ }),

/***/ "./src/view/film-details.js":
/*!**********************************!*\
  !*** ./src/view/film-details.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmDetail; });
/* harmony import */ var _utils_film_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/film.js */ "./src/utils/film.js");
/* harmony import */ var _smart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart.js */ "./src/view/smart.js");


const EmojiImage = {
  SMILE: `<img src="images/emoji/smile.png" width="55" height="55" alt="emoji">`,
  SLEEPING: `<img src="images/emoji/sleeping.png" width="55" height="55" alt="emoji">`,
  PUKE: `<img src="images/emoji/puke.png" width="55" height="55" alt="emoji"></img>`,
  ANGRY: `<img src="images/emoji/angry.png" width="55" height="55" alt="emoji"></img>`
};

const EmojiType = {
  SMILE: `smile`,
  SLEEPING: `sleeping`,
  PUKE: `puke`,
  ANGRY: `angry`
};

const generateGenres = (genres) => {
  let result = ``;
  for (let i = 0; i < genres.length; i++) {
    result += `<span class="film-details__genre">${genres[i]}</span>`;
  }
  return result;
};

const generateComments = (comments) => {
  return comments.map((element) => `<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="${element.emoji}" width="55" height="55" alt="emoji-smile">
  </span>
  <div>
    <p class="film-details__comment-text">${element.text}</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${element.author}</span>
      <span class="film-details__comment-day">${convertDateToString(element.time)}</span>
      <button class="film-details__comment-delete" data-comment-id ="${element.id}">Delete</button>
    </p>
  </div>
</li>`).join(``);
};

const generateControls = ({favorite, watched, watchlist}) => {
  return `<input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${watchlist ? `checked` : ``}>
    <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

    <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${watched ? `checked` : ``}>
    <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

    <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${favorite ? `checked` : ``}>
    <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>`;
};

const convertDateToString = (date) => `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

const createFilmDetailsTemplate = (film) => {

  const {image, title, rating, director, writers, actors, releaseDate, duration, country, genres, description, comments, ageRating, status, isSmile, isAngry, isSleeping, isPuke, message} = film;
  const genreFieldName = genres.length > 1 ? `Genres` : `Genre`;
  const commentsCount = comments.length;
  const humanizeDuration = Object(_utils_film_js__WEBPACK_IMPORTED_MODULE_0__["getHumanizeViewFromDuration"])(duration);

  return `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="form-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="${image}" alt="">
              <p class="film-details__age">${ageRating}</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${title}</h3>
                  <p class="film-details__title-original">Original: ${title}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${rating}</p>
                </div>
              </div>

              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${writers}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${actors}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${releaseDate.toLocaleString(`en-GB`, {day: `numeric`, month: `long`, year: `numeric`})}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${humanizeDuration}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${country}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">${genreFieldName}</td>
                  <td class="film-details__cell">
                  ${generateGenres(genres)}
                  </td>
                </tr>
              </table>

              <p class="film-details__film-description">
                ${description}
              </p>
            </div>
          </div>

          <section class="film-details__controls">
            ${generateControls(status)}
          </section>
        </div>

        <div class="form-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentsCount}</span></h3>

            <ul class="film-details__comments-list">
            ${generateComments(comments)}
            </ul>

            <div class="film-details__new-comment">
              <div for="add-emoji" class="film-details__add-emoji-label">
              ${isSmile ? `${EmojiImage.SMILE}` : ``}
              ${isAngry ? `${EmojiImage.ANGRY}` : ``}
              ${isSleeping ? `${EmojiImage.SLEEPING}` : ``}
              ${isPuke ? `${EmojiImage.PUKE}` : ``}
              </div>

              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">${message ? message : ``}</textarea>
              </label>

              <div class="film-details__emoji-list">
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile" ${isSmile ? `checked` : ``}>
                <label class="film-details__emoji-label" for="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji" data-emoji-type="${EmojiType.SMILE}">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping" ${isSleeping ? `checked` : ``}>
                <label class="film-details__emoji-label" for="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji" data-emoji-type="${EmojiType.SLEEPING}">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke" ${isPuke ? `checked` : ``}>
                <label class="film-details__emoji-label" for="emoji-puke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji" data-emoji-type="${EmojiType.PUKE}">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry" ${isAngry ? `checked` : ``}>
                <label class="film-details__emoji-label" for="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji" data-emoji-type="${EmojiType.ANGRY}">
                </label>
              </div>
            </div>
          </section>
        </div>
    </form>
    </section>`;
};

class FilmDetail extends _smart_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(film) {
    super();
    this._data = FilmDetail.parseFilmToData(film);
    this._clickHandler = this._clickHandler.bind(this);
    this._watchListClickHandler = this._watchListClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
    this._deleteButtonClickHandler = this._deleteButtonClickHandler.bind(this);
    this._emojiClickHandler = this._emojiClickHandler.bind(this);
    this._commentInputHandler = this._commentInputHandler.bind(this);
    this._setInnerHandler();
  }

  _setInnerHandler() {
    // emoji
    this.getElement()
      .querySelectorAll(`.film-details__emoji-label`)
      .forEach((element) => element.addEventListener(`click`, this._emojiClickHandler));

    this.getElement()
      .querySelector(`.film-details__comment-input`)
      .addEventListener(`input`, this._commentInputHandler);
  }

  restoreHandlers() {
    this._setInnerHandler();
    this.setWatchListClickHandler(this._callback.watchListClick);
    this.setWatchedClickHandler(this._callback.watchedClick);
    this.setFavoriteClickHandler(this._callback.favoriteClick);
    this.setDeleteButtonClickHandler(this._callback.deleteButtonClick);
    this.setClickHandler(this._callback.click);
    this.setEnterKeyDown(this._callback.enterKeyDown);
  }

  _commentInputHandler(evt) {
    evt.preventDefault();
    this.updateData({message: evt.target.value}, true);
  }

  static parseFilmToData(film) {
    return Object.assign({}, film, {isSmile: false, isAngry: false, isPuke: false, isSleeping: false, message: null});
  }

  getTemplate() {
    return createFilmDetailsTemplate(this._data);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setEnterKeyDown(callback) {
    this._callback.enterKeyDown = callback;
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._clickHandler);
  }

  setWatchListClickHandler(callback) {
    this._callback.watchListClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watchlist`).addEventListener(`click`, this._watchListClickHandler);
  }

  _watchListClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchListClick();
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watched`).addEventListener(`click`, this._watchedClickHandler);
  }

  _watchedClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchedClick();
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.film-details__control-label--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setDeleteButtonClickHandler(callback) {
    this._callback.deleteButtonClick = callback;
    this.getElement()
      .querySelectorAll(`.film-details__comment-delete`)
      .forEach((element) => element.addEventListener(`click`, this._deleteButtonClickHandler));
  }

  _deleteButtonClickHandler(evt) {
    evt.preventDefault();
    this._callback.deleteButtonClick(evt.target.dataset.commentId);
  }

  _emojiClickHandler(evt) {
    this._updateEmoji(evt.target.dataset.emojiType);
  }

  _updateEmoji(emojiType) {
    switch (emojiType) {
      case EmojiType.SMILE:
        this.updateData({isSmile: true, isAngry: false, isPuke: false, isSleeping: false});
        break;
      case EmojiType.SLEEPING:
        this.updateData({isSmile: false, isAngry: false, isPuke: false, isSleeping: true});
        break;
      case EmojiType.ANGRY:
        this.updateData({isSmile: false, isAngry: true, isPuke: false, isSleeping: false});
        break;
      case EmojiType.PUKE:
        this.updateData({isSmile: false, isAngry: false, isPuke: true, isSleeping: false});
        break;
    }
  }

  returnSelectedEmojiType() {
    if (this._data.isAngry || this._data.isPuke || this._data.isSleeping || this._data.isSmile) {
      switch (true) {
        case this._data.isAngry:
          return EmojiType.ANGRY;
        case this._data.isPuke:
          return EmojiType.PUKE;
        case this._data.isSleeping:
          return EmojiType.SLEEPING;
        case this._data.isSmile:
          return EmojiType.SMILE;
      }
    }
    return false;
  }

  returnUserMessage() {
    return this._data.message;
  }

  reset(film) {
    this.updateData(FilmDetail.parseFilmToData(film));
  }
}


/***/ }),

/***/ "./src/view/films-container.js":
/*!*************************************!*\
  !*** ./src/view/films-container.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmContainer; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


class FilmContainer extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return `<section class="films"></section>`;
  }
}


/***/ }),

/***/ "./src/view/films-list-container.js":
/*!******************************************!*\
  !*** ./src/view/films-list-container.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsListContainer; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


class FilmsListContainer extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return `<div class="films-list__container"></div>`;
  }
}


/***/ }),

/***/ "./src/view/films-list-most-commented.js":
/*!***********************************************!*\
  !*** ./src/view/films-list-most-commented.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmListMostCommented; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsListMostCommentedTemplate = () => {
  return `<section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
    </section>
  `;
};

class FilmListMostCommented extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmsListMostCommentedTemplate();
  }
}


/***/ }),

/***/ "./src/view/films-list-top-rated.js":
/*!******************************************!*\
  !*** ./src/view/films-list-top-rated.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmListTopRated; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsListTopRatedTemplate = () => {
  return `<section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
    </section>
  `;
};

class FilmListTopRated extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmsListTopRatedTemplate();
  }
}


/***/ }),

/***/ "./src/view/films-list.js":
/*!********************************!*\
  !*** ./src/view/films-list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmList; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsListTemplate = () => {
  return `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    </section>`;
};

class FilmList extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmsListTemplate();
  }
}


/***/ }),

/***/ "./src/view/menu.js":
/*!**************************!*\
  !*** ./src/view/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createMenuTemplate = (countFilmsStatus) => {

  const {watchlist, watched, favorite} = countFilmsStatus;

  return `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist}</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${watched}</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorite}</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`;
};

class Menu extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(countFilmsStatus) {
    super();
    this._countFilmsStatus = countFilmsStatus;
  }

  getTemplate() {
    return createMenuTemplate(this._countFilmsStatus);
  }
}


/***/ }),

/***/ "./src/view/no-film.js":
/*!*****************************!*\
  !*** ./src/view/no-film.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoFilm; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


class NoFilm extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return `<h2 class="films-list__title">There are no movies in our database</h2>`;
  }
}


/***/ }),

/***/ "./src/view/show-more-button.js":
/*!**************************************!*\
  !*** ./src/view/show-more-button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowMoreButton; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


class ShowMoreButton extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return `<button class="films-list__show-more">Show more</button>`;
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}


/***/ }),

/***/ "./src/view/smart.js":
/*!***************************!*\
  !*** ./src/view/smart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Smart; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


class Smart extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._data = {};
  }

  restoreHandlers() {
    throw new Error(`Метод restoreHandlers надо переопределить`);
  }

  updateElement() {
    let prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.getElement();

    parent.replaceChild(newElement, prevElement);
    prevElement = null; // Чтобы окончательно "убить" ссылку на prevElement

    this.restoreHandlers();
  }

  updateData(update, isJustDataUpdating = false) {
    this._data = Object.assign({}, this._data, update);

    if (isJustDataUpdating) {
      return;
    }

    this.updateElement();
  }
}


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: SortType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const SortType = {
  DEFAULT: `default`,
  DATE: `date`,
  RATING: `rating`
};

const createSortTemplate = () => {
  return `<ul class="sort">
      <li><a href="#" data-sort-type="${SortType.DEFAULT}" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" data-sort-type="${SortType.DATE}" class="sort__button">Sort by date</a></li>
      <li><a href="#" data-sort-type="${SortType.RATING}" class="sort__button">Sort by rating</a></li>
    </ul>`;
};

class Sort extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortTemplate();
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.nodeName !== `A`) {
      return;
    }
    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
    const sortButtonsElements = this.getElement().querySelectorAll(`.sort__button`);
    sortButtonsElements.forEach((element) => element.classList.remove(`sort__button--active`));
    evt.target.classList.add(`sort__button--active`);
  }
}


/***/ }),

/***/ "./src/view/statistics.js":
/*!********************************!*\
  !*** ./src/view/statistics.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Statistics; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


class Statistics extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(count) {
    super();
    this._count = count;
  }

  getTemplate() {
    return `<p>${this._count} movies inside</p>`;
  }
}


/***/ }),

/***/ "./src/view/user-profile.js":
/*!**********************************!*\
  !*** ./src/view/user-profile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserProfile; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createUserProfileTemplate = ({profileRating, image}) => {
  return `<section class="header__profile profile">
      <p class="profile__rating">${profileRating}</p>
      <img class="profile__avatar" src="${image}" alt="Avatar" width="35" height="35">
    </section>`;
};

class UserProfile extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(user) {
    super();
    this._user = user;
  }

  getTemplate() {
    return createUserProfileTemplate(this._user);
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map