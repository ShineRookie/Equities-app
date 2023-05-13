export const fetchRequest = () => ({
  type: "FETCH_REQUEST",
});

export const fetchSuccess = (data) => ({
  type: "FETCH_SUCCESS",
  payload: data,
});

export const fetchFailure = (error) => ({
  type: "FETCH_FAILURE",
  payload: error,
});

export const nextPage = () => ({
  type: "NEXT_PAGE",
});

export const prevPage = () => ({
  type: "PREV_PAGE",
});

export const changePosition = (data) => ({
  type: "CHANGE_POSITION",
  payload: data,
});

export const fetchFilter = (filter) => ({
  type: "FETCH_FILTER",
  payload: filter,
});
