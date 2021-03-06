export const UserAction = {
  UPDATE_FILM: `UPDATE_FILM`,
  DELETE_COMMENT: `DELETE`,
  ADD_COMMENT: `ADD_COMMENT`
};

export const UpdateType = {
  MINOR: `MINOR`, // добавление - удаление фильма в различных категориях
  MAJOR: `MAJOR`, // при сортировке фильтре перерисовываем весь список
  INIT: `INIT`
};

export const FilterType = {
  ALL_MOVIES: `all movies`,
  WATCHLIST: `watchlist`,
  HISTORY: `history`,
  FAVORITES: `favorites`,
};

export const StatisticFilter = {
  ALL_TIME: `all-time`,
  TODAY: `today`,
  WEEK: `week`,
  MONTH: `month`,
  YEAR: `year`
};
