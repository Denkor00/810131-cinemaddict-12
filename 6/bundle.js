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

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: BEFOREEND */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFOREEND", function() { return BEFOREEND; });
const BEFOREEND = `beforeend`;


/***/ }),

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
/* harmony import */ var _view_sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/sort.js */ "./src/view/sort.js");
/* harmony import */ var _view_films_container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/films-container.js */ "./src/view/films-container.js");
/* harmony import */ var _view_films_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/films-list.js */ "./src/view/films-list.js");
/* harmony import */ var _view_no_film_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/no-film.js */ "./src/view/no-film.js");
/* harmony import */ var _view_films_list_top_rated_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/films-list-top-rated.js */ "./src/view/films-list-top-rated.js");
/* harmony import */ var _view_films_list_most_commented_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/films-list-most-commented.js */ "./src/view/films-list-most-commented.js");
/* harmony import */ var _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/films-list-container.js */ "./src/view/films-list-container.js");
/* harmony import */ var _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/show-more-button.js */ "./src/view/show-more-button.js");
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_statistics_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/statistics.js */ "./src/view/statistics.js");
/* harmony import */ var _view_film_details_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/film-details.js */ "./src/view/film-details.js");
/* harmony import */ var _mock_film_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mock/film.js */ "./src/mock/film.js");
/* harmony import */ var _mock_user_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mock/user.js */ "./src/mock/user.js");
/* harmony import */ var _mock_menu_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mock/menu.js */ "./src/mock/menu.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./const.js */ "./src/const.js");













 // функция создает мок для фильма
 // мок для пользователя
 // счет фильмов для меню



const CountType = {
  COMMON_FILMS: 20,
  EXTRA_FILMS: 2,
  RENDER_FOR_STEP: 5,
};

const Key = {
  ESCAPE: `Escape`,
  ESC: `Esc`,
};

const renderFilm = (filmsListContainerElement, film) => {
  const filmCardElement = new _view_film_card_js__WEBPACK_IMPORTED_MODULE_10__["default"](film);
  const filmDetailElement = new _view_film_details_js__WEBPACK_IMPORTED_MODULE_12__["default"](film);

  const hideFilmDetail = () => {
    bodyElement.removeChild(filmDetailElement.getElement());
    bodyElement.classList.remove(`hide-overflow`);
  };

  const showFilmDetail = () => {
    bodyElement.appendChild(filmDetailElement.getElement());
    bodyElement.classList.add(`hide-overflow`);
    document.addEventListener(`keydown`, onEscKeyDown);
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === Key.ESCAPE || evt.key === Key.ESC) {
      evt.preventDefault();
      hideFilmDetail();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  filmCardElement.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, () => showFilmDetail());
  filmCardElement.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, () => showFilmDetail());
  filmCardElement.getElement().querySelector(`.film-card__title`).addEventListener(`click`, () => showFilmDetail());

  filmDetailElement.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, (evt) => {
    evt.preventDefault();
    hideFilmDetail();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  Object(_utils_js__WEBPACK_IMPORTED_MODULE_16__["render"])(filmsListContainerElement, filmCardElement.getElement(), _const_js__WEBPACK_IMPORTED_MODULE_17__["BEFOREEND"]);
};

// создание моков для фильма
const commonFilms = new Array(CountType.COMMON_FILMS).fill(``).map(_mock_film_js__WEBPACK_IMPORTED_MODULE_13__["generateFilm"]);
const topRatedFilms = commonFilms.slice().sort((firstFilm, secondFilm) => secondFilm.rating - firstFilm.rating);
const topCommentedFilms = commonFilms.slice().sort((firstFilm, secondFilm) => secondFilm.comments.length - firstFilm.comments.length);
const filmsCount = commonFilms.length;
// счет фильмов для меню, для статуса пользователя
const filmsStatusCount = Object(_mock_menu_js__WEBPACK_IMPORTED_MODULE_15__["generateFilmsMenu"])(commonFilms);
// мок для пользователя
const user = Object(_mock_user_js__WEBPACK_IMPORTED_MODULE_14__["generateUser"])(filmsStatusCount);

const bodyElement = document.querySelector(`body`);
const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const footerStatisticsElement = document.querySelector(`.footer__statistics`);

Object(_utils_js__WEBPACK_IMPORTED_MODULE_16__["render"])(headerElement, new _view_user_profile_js__WEBPACK_IMPORTED_MODULE_0__["default"](user).getElement(), _const_js__WEBPACK_IMPORTED_MODULE_17__["BEFOREEND"]);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_16__["render"])(mainElement, new _view_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"](filmsStatusCount).getElement(), _const_js__WEBPACK_IMPORTED_MODULE_17__["BEFOREEND"]);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_16__["render"])(mainElement, new _view_sort_js__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _const_js__WEBPACK_IMPORTED_MODULE_17__["BEFOREEND"]);

const filmsContainerElement = new _view_films_container_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
Object(_utils_js__WEBPACK_IMPORTED_MODULE_16__["render"])(mainElement, filmsContainerElement.getElement(), _const_js__WEBPACK_IMPORTED_MODULE_17__["BEFOREEND"]);

const filmsListElement = new _view_films_list_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
Object(_utils_js__WEBPACK_IMPORTED_MODULE_16__["render"])(filmsContainerElement.getElement(), filmsListElement.getElement(), _const_js__WEBPACK_IMPORTED_MODULE_17__["BEFOREEND"]);

if (!commonFilms.length) {
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_16__["render"])(filmsListElement.getElement(), new _view_no_film_js__WEBPACK_IMPORTED_MODULE_5__["default"]().getElement(), _const_js__WEBPACK_IMPORTED_MODULE_17__["BEFOREEND"]);
} else {
  const filmListTopRatedElement = new _view_films_list_top_rated_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
  const filmListMostCommented = new _view_films_list_most_commented_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_16__["render"])(filmsContainerElement.getElement(), filmListTopRatedElement.getElement(), _const_js__WEBPACK_IMPORTED_MODULE_17__["BEFOREEND"]);
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_16__["render"])(filmsContainerElement.getElement(), filmListMostCommented.getElement(), _const_js__WEBPACK_IMPORTED_MODULE_17__["BEFOREEND"]);

  const filmsListContainerElement = new _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_16__["render"])(filmsListElement.getElement(), filmsListContainerElement.getElement(), _const_js__WEBPACK_IMPORTED_MODULE_17__["BEFOREEND"]);

  for (let i = 0; i < CountType.RENDER_FOR_STEP; i++) {
    renderFilm(filmsListContainerElement.getElement(), commonFilms[i]);
  }

  const filmsListExtraElements = [
    filmListTopRatedElement.getElement(),
    filmListMostCommented.getElement()
  ];
  filmsListExtraElements.forEach((element) => {
    const filmsListContainer = new _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_16__["render"])(element, filmsListContainer.getElement(), _const_js__WEBPACK_IMPORTED_MODULE_17__["BEFOREEND"]);
    const filmsListTitleElement = element.querySelector(`.films-list__title`);

    const filmsForRendering = filmsListTitleElement.textContent === `Top rated` ? topRatedFilms : topCommentedFilms;

    for (let i = 0; i < CountType.EXTRA_FILMS; i++) {
      renderFilm(filmsListContainer.getElement(), filmsForRendering[i]);
    }
  });

  // рендеринг фильмов при нажатии кнопки
  if (commonFilms.length > CountType.RENDER_FOR_STEP) {
    let renderFilmCount = CountType.RENDER_FOR_STEP;
    const showMoreButtonElement = new _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_16__["render"])(filmsListElement.getElement(), showMoreButtonElement.getElement(), _const_js__WEBPACK_IMPORTED_MODULE_17__["BEFOREEND"]);

    showMoreButtonElement.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();
      commonFilms
        .slice(renderFilmCount, renderFilmCount + CountType.RENDER_FOR_STEP)
        .forEach((film) => renderFilm(filmsListContainerElement.getElement(), film));

      renderFilmCount += CountType.RENDER_FOR_STEP;
      if (renderFilmCount >= commonFilms.length) {
        showMoreButtonElement.getElement().remove();
        showMoreButtonElement.removeElement();
      }
    });
  }
}

Object(_utils_js__WEBPACK_IMPORTED_MODULE_16__["render"])(footerStatisticsElement, new _view_statistics_js__WEBPACK_IMPORTED_MODULE_11__["default"](filmsCount).getElement(), _const_js__WEBPACK_IMPORTED_MODULE_17__["BEFOREEND"]);


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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


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
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return `${randomDate.getFullYear()}/${randomDate.getMonth()}/${randomDate.getDate()} ${randomDate.getHours()}:${randomDate.getMinutes()}`;
};

const generateComment = () => ({
  emoji: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomValueFromArray"])(EMOJIS),
  text: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomValueFromArray"])(COMMENTS_TEXT),
  author: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomValueFromArray"])(AUTHORS),
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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");



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

const generateDescription = (sentences) => sentences.slice(0, Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(DescriptionSentences.MIN, DescriptionSentences.MAX)).join(``);
const generateGenre = (genreTypes) => genreTypes.slice(0, Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(MIN_GENRE_BOUND, genreTypes.length - 1));

const generateDuration = () => ({
  hours: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(HourDuration.MIN, HourDuration.MAX),
  minutes: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(MinutesDuration.MIN, MinutesDuration.MAX),
});

const getRandomBooleanValue = () => Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(BooleanValue.FALSE, BooleanValue.TRUE));

const generateStatus = () => ({
  favorite: getRandomBooleanValue(),
  watched: getRandomBooleanValue(),
  watchlist: getRandomBooleanValue(),
});

const generateFilm = () => {
  return {
    image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomValueFromArray"])(IMAGES),
    title: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomValueFromArray"])(TITLES),
    rating: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomDouble"])(RatingBound.MIN, RatingBound.MAX),
    director: `Anthony Mann`,
    writers: `Anne Wigton, Heinz Herald, Richard Weil`,
    actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
    releaseDate: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomDate"])(),
    duration: generateDuration(),
    country: `USA`,
    genres: generateGenre(GENRE_TYPES),
    description: generateDescription(SENTENCES),
    comments: new Array(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(CommentBound.MIN, CommentBound.MAX)).fill(``).map(_comment_js__WEBPACK_IMPORTED_MODULE_0__["generateComment"]),
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

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomInteger, getRandomDouble, getRandomDate, getHumanizeViewFromDuration, getRandomValueFromArray, render, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDouble", function() { return getRandomDouble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDate", function() { return getRandomDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHumanizeViewFromDuration", function() { return getHumanizeViewFromDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomValueFromArray", function() { return getRandomValueFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./src/const.js");


const getRandomInteger = (min = 0, max = 1) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomDouble = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));

  return (lower + Math.random() * (upper - lower + 1)).toFixed(1);
};

const getRandomDate = () => {
  const start = new Date(1940, 10, 30);
  const end = new Date();
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return randomDate.toLocaleString(`en-GB`, {day: `numeric`, month: `long`, year: `numeric`});
};

const getHumanizeViewFromDuration = ({hours, minutes}) => {
  let humanizeTimeString = ``;
  humanizeTimeString += hours ? `${hours}h ` : ``;
  humanizeTimeString += minutes ? `${minutes}m` : ``;

  return humanizeTimeString;
};

const getRandomValueFromArray = (values) => values[getRandomInteger(0, values.length - 1)];

// export const renderTemplate = (container, template, place) => container.insertAdjacentHTML(place, template);

const render = (container, element, place) => {
  if (place === _const_js__WEBPACK_IMPORTED_MODULE_0__["BEFOREEND"]) {
    container.append(element);
  } else {
    throw new Error(`Передано некорректное place в функцию render`);
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};


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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createFilmCardTemplate = (film) => {

  const {title, rating, releaseDate, duration, genres, image, description, comments, status} = film;
  const {favorite, watched, watchlist} = status;
  const genre = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomValueFromArray"])(genres);
  const year = releaseDate.slice(releaseDate.length - 4, releaseDate.length);
  const humanizeDuration = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getHumanizeViewFromDuration"])(duration);

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

class FilmCard {
  constructor(film) {
    this._film = film;
    this._element = null;
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


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
      <span class="film-details__comment-day">${element.time}</span>
      <button class="film-details__comment-delete">Delete</button>
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

const createFilmDetailsTemplate = (film) => {

  const {image, title, rating, director, writers, actors, releaseDate, duration, country, genres, description, comments, ageRating, status} = film;
  const genreFieldName = genres.length > 1 ? `Genres` : `Genre`;
  const commentsCount = comments.length;
  const humanizeDuration = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getHumanizeViewFromDuration"])(duration);

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
                  <td class="film-details__cell">${releaseDate}</td>
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
              <div for="add-emoji" class="film-details__add-emoji-label"></div>

              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>

              <div class="film-details__emoji-list">
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
                <label class="film-details__emoji-label" for="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                <label class="film-details__emoji-label" for="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
                <label class="film-details__emoji-label" for="emoji-puke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
                <label class="film-details__emoji-label" for="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                </label>
              </div>
            </div>
          </section>
        </div>
    </form>
    </section>`;
};

class FilmDetail {
  constructor(film) {
    this._film = film;
    this._element = null;
  }

  getTemplate() {
    return createFilmDetailsTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


class FilmContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return `<section class="films"></section>`;
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


class FilmsListContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return `<div class="films-list__container"></div>`;
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createFilmsListMostCommentedTemplate = () => {
  return `<section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
    </section>
  `;
};

class FilmListMostCommented {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsListMostCommentedTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createFilmsListTopRatedTemplate = () => {
  return `<section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
    </section>
  `;
};

class FilmListTopRated {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsListTopRatedTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createFilmsListTemplate = () => {
  return `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    </section>`;
};

class FilmList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


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

class Menu {
  constructor(countFilmsStatus) {
    this._countFilmsStatus = countFilmsStatus;
    this._element = null;
  }

  getTemplate() {
    return createMenuTemplate(this._countFilmsStatus);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


class NoFilm {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return `<h2 class="films-list__title">There are no movies in our database</h2>`;
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


class ShowMoreButton {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return `<button class="films-list__show-more">Show more</button>`;
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createSortTemplate = () => {
  return `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`;
};

class Sort {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSortTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


class Statistics {
  constructor(count) {
    this._count = count;
    this._element = null;
  }

  getTemplate() {
    return `<p>${this._count} movies inside</p>`;
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createUserProfileTemplate = (user) => {
  const {profileRating, image} = user;
  return `<section class="header__profile profile">
      <p class="profile__rating">${profileRating}</p>
      <img class="profile__avatar" src="${image}" alt="Avatar" width="35" height="35">
    </section>`;
};

class UserProfile {
  constructor(user) {
    this._user = user;
    this._element = null;
  }

  getTemplate() {
    return createUserProfileTemplate(this._user);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map