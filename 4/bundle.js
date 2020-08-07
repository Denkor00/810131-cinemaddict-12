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
/* harmony import */ var _view_sorting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/sorting.js */ "./src/view/sorting.js");
/* harmony import */ var _view_films_container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/films-container.js */ "./src/view/films-container.js");
/* harmony import */ var _view_films_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/films-list.js */ "./src/view/films-list.js");
/* harmony import */ var _view_films_list_top_rated_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/films-list-top-rated.js */ "./src/view/films-list-top-rated.js");
/* harmony import */ var _view_films_list_most_commented_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/films-list-most-commented.js */ "./src/view/films-list-most-commented.js");
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_statistics_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/statistics.js */ "./src/view/statistics.js");
/* harmony import */ var _mock_film_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock/film.js */ "./src/mock/film.js");
/* harmony import */ var _mock_user_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mock/user.js */ "./src/mock/user.js");
/* harmony import */ var _mock_menu_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mock/menu.js */ "./src/mock/menu.js");









// import {createFilmDetailsTemplate, bodyElement} from './view/film-details.js';
 // функция создает мок для фильма
 // мок для пользователя
 // счет фильмов для меню

const CountType = {
  COMMON_FILMS_COUNT: 20,
  EXTRA_FILMS_COUNT: 2,
  RENDER_FOR_STEP: 5,
};

// создание моков для фильма
const commonFilms = new Array(CountType.COMMON_FILMS_COUNT).fill(``).map(_mock_film_js__WEBPACK_IMPORTED_MODULE_9__["generateFilm"]);
const topRatedFilms = commonFilms.slice().sort((firstFilm, secondFilm) => secondFilm.rating - firstFilm.rating);
const topCommentedFilms = commonFilms.slice().sort((firstFilm, secondFilm) => secondFilm.comments.length - firstFilm.comments.length);
const filmsCount = commonFilms.length;
// счет фильмов для меню, для статуса пользователя
const filmsStatusCount = Object(_mock_menu_js__WEBPACK_IMPORTED_MODULE_11__["generateFilmsMenu"])(commonFilms);
// мок для пользователя
const user = Object(_mock_user_js__WEBPACK_IMPORTED_MODULE_10__["generateUser"])(filmsStatusCount);

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const footerStatisticsElement = document.querySelector(`.footer__statistics`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(headerElement, Object(_view_user_profile_js__WEBPACK_IMPORTED_MODULE_0__["createUserProfileTemplate"])(user), `beforeend`);
render(mainElement, Object(_view_menu_js__WEBPACK_IMPORTED_MODULE_1__["createMenuTemplate"])(filmsStatusCount), `beforeend`);
render(mainElement, Object(_view_sorting_js__WEBPACK_IMPORTED_MODULE_2__["createSortingTemplate"])(), `beforeend`);
render(mainElement, Object(_view_films_container_js__WEBPACK_IMPORTED_MODULE_3__["createFilmsContainerTemplate"])(), `beforeend`);

const filmsElement = mainElement.querySelector(`.films`);
render(filmsElement, Object(_view_films_list_js__WEBPACK_IMPORTED_MODULE_4__["createFilmsListTemplate"])(), `beforeend`);
render(filmsElement, Object(_view_films_list_top_rated_js__WEBPACK_IMPORTED_MODULE_5__["createFilmsListTopRatedTemplate"])(), `beforeend`);
render(filmsElement, Object(_view_films_list_most_commented_js__WEBPACK_IMPORTED_MODULE_6__["createFilmsListMostCommentedTemplate"])(), `beforeend`);

const filmsListContainerElement = filmsElement.querySelector(`.films-list__container`);
// render(bodyElement, createFilmDetailsTemplate(commonFilms[0]), `beforeend`); // попап карточки фильма
for (let x = 0; x < CountType.RENDER_FOR_STEP; x++) {
  render(filmsListContainerElement, Object(_view_film_card_js__WEBPACK_IMPORTED_MODULE_7__["createFilmCardTemplate"])(commonFilms[x]), `beforeend`);
}

const filmsListExtraElements = filmsElement.querySelectorAll(`.films-list--extra`);
filmsListExtraElements.forEach((element) => {
  const filmsListExtraContainerElement = element.querySelector(`.films-list__container`);
  const filmsListTitleElement = element.querySelector(`.films-list__title`);

  const filmsForRendering = filmsListTitleElement.textContent === `Top rated` ? topRatedFilms : topCommentedFilms;

  for (let i = 0; i < CountType.EXTRA_FILMS_COUNT; i++) {
    render(filmsListExtraContainerElement, Object(_view_film_card_js__WEBPACK_IMPORTED_MODULE_7__["createFilmCardTemplate"])(filmsForRendering[i]), `beforeend`);
  }
});

render(footerStatisticsElement, Object(_view_statistics_js__WEBPACK_IMPORTED_MODULE_8__["createStatisticsTemplate"])(filmsCount), `beforeend`);

// рендеринг фильмов при нажатии кнопки
if (commonFilms.length > CountType.RENDER_FOR_STEP) {
  let renderFilmCount = CountType.RENDER_FOR_STEP;
  const showMoreElement = document.querySelector(`.films-list__show-more`);

  showMoreElement.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    commonFilms
      .slice(renderFilmCount, renderFilmCount + CountType.RENDER_FOR_STEP)
      .forEach((film) => render(filmsListContainerElement, Object(_view_film_card_js__WEBPACK_IMPORTED_MODULE_7__["createFilmCardTemplate"])(film), `beforeend`));

    renderFilmCount += CountType.RENDER_FOR_STEP;
    if (renderFilmCount >= commonFilms.length) {
      showMoreElement.remove();
    }
  });
}



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

const generateDesciption = (sentences) => sentences.slice(0, Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, 5)).join(``);
const generateGenre = (genreTypes) => genreTypes.slice(0, Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, genreTypes.length - 1));

const generateDuration = () => ({
  hours: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1),
  minutes: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, 60),
});

const getRandomBooleanValue = () => Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1));

const generateStatus = () => ({
  favorite: getRandomBooleanValue(),
  watched: getRandomBooleanValue(),
  watchlist: getRandomBooleanValue(),
});

const generateFilm = () => {
  return {
    image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomValueFromArray"])(IMAGES),
    title: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomValueFromArray"])(TITLES),
    rating: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomDouble"])(1, 9),
    director: `Anthony Mann`,
    writers: `Anne Wigton, Heinz Herald, Richard Weil`,
    actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
    releaseDate: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomDate"])(),
    duration: generateDuration(),
    country: `USA`,
    genres: generateGenre(GENRE_TYPES),
    description: generateDesciption(SENTENCES),
    comments: new Array(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 5)).fill(``).map(_comment_js__WEBPACK_IMPORTED_MODULE_0__["generateComment"]),
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

  const filmsMenuCount = Object.entries(countMapMenu).map(([countMapMenuName, countFilm]) => ({
    title: countMapMenuName,
    count: countFilm(statuses),
  }));
  const result = {};
  filmsMenuCount.forEach(({title, count}) => {
    result[title] = count;
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
/*! exports provided: getRandomInteger, getRandomDouble, getRandomDate, getHumanizeViewFromDuration, getRandomValueFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDouble", function() { return getRandomDouble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDate", function() { return getRandomDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHumanizeViewFromDuration", function() { return getHumanizeViewFromDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomValueFromArray", function() { return getRandomValueFromArray; });
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


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: createFilmCardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmCardTemplate", function() { return createFilmCardTemplate; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createFilmCardTemplate = (film) => {

  const {title, rating, releaseDate, duration, genres, image, description, comments, status} = film;
  const {favorite, watched, watchlist} = status;
  const genre = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomValueFromArray"])(genres);
  const year = releaseDate.slice(releaseDate.length - 4, releaseDate.length);
  const humanizeDuration = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getHumanizeViewFromDuration"])(duration);

  return (`
    <article class="film-card">
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
    </article>
  `);
};


/***/ }),

/***/ "./src/view/films-container.js":
/*!*************************************!*\
  !*** ./src/view/films-container.js ***!
  \*************************************/
/*! exports provided: createFilmsContainerTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsContainerTemplate", function() { return createFilmsContainerTemplate; });
const createFilmsContainerTemplate = () => `<section class="films"></section>`;


/***/ }),

/***/ "./src/view/films-list-most-commented.js":
/*!***********************************************!*\
  !*** ./src/view/films-list-most-commented.js ***!
  \***********************************************/
/*! exports provided: createFilmsListMostCommentedTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsListMostCommentedTemplate", function() { return createFilmsListMostCommentedTemplate; });
const createFilmsListMostCommentedTemplate = () => {
  return (`
    <section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container"></div>
    </section>
  `);
};




/***/ }),

/***/ "./src/view/films-list-top-rated.js":
/*!******************************************!*\
  !*** ./src/view/films-list-top-rated.js ***!
  \******************************************/
/*! exports provided: createFilmsListTopRatedTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsListTopRatedTemplate", function() { return createFilmsListTopRatedTemplate; });
const createFilmsListTopRatedTemplate = () => {
  return (`
    <section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container"></div>
    </section>
  `);
};




/***/ }),

/***/ "./src/view/films-list.js":
/*!********************************!*\
  !*** ./src/view/films-list.js ***!
  \********************************/
/*! exports provided: createFilmsListTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsListTemplate", function() { return createFilmsListTemplate; });
const createFilmsListTemplate = () => {
  return (`
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container"></div>
      <button class="films-list__show-more">Show more</button>
    </section>
  `);
};




/***/ }),

/***/ "./src/view/menu.js":
/*!**************************!*\
  !*** ./src/view/menu.js ***!
  \**************************/
/*! exports provided: createMenuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMenuTemplate", function() { return createMenuTemplate; });
const createMenuTemplate = (countFilmsStatus) => {

  const {watchlist, watched, favorite} = countFilmsStatus;

  return (`
    <nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist}</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${watched}</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorite}</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>
  `);
};


/***/ }),

/***/ "./src/view/sorting.js":
/*!*****************************!*\
  !*** ./src/view/sorting.js ***!
  \*****************************/
/*! exports provided: createSortingTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSortingTemplate", function() { return createSortingTemplate; });
const createSortingTemplate = () => {
  return (`
    <ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>
  `);
};


/***/ }),

/***/ "./src/view/statistics.js":
/*!********************************!*\
  !*** ./src/view/statistics.js ***!
  \********************************/
/*! exports provided: createStatisticsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStatisticsTemplate", function() { return createStatisticsTemplate; });
const createStatisticsTemplate = (count) => `<p>${count} movies inside</p>`;



/***/ }),

/***/ "./src/view/user-profile.js":
/*!**********************************!*\
  !*** ./src/view/user-profile.js ***!
  \**********************************/
/*! exports provided: createUserProfileTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserProfileTemplate", function() { return createUserProfileTemplate; });
const createUserProfileTemplate = (user) => {
  const {profileRating, image} = user;
  return (`
    <section class="header__profile profile">
      <p class="profile__rating">${profileRating}</p>
      <img class="profile__avatar" src="${image}" alt="Avatar" width="35" height="35">
    </section>
    `);
};




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map