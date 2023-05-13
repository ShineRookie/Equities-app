const initialState = {
  reports: [],
  activeFilter: "mostactive",
  filterList: ["mostactive", "gainers", "losers"],
  loading: false,
  error: null,
  page: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        reports: action.payload,
        loading: false,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "NEXT_PAGE":
      return {
        ...state,
        page: state.page + 10,
      };
    case "PREV_PAGE":
      return {
        ...state,
        page: state.page - 10,
      };
    case "CHANGE_POSITION":
      return {
        ...state,
        reports: action.payload,
      };
    case "FETCH_FILTER":
      return {
        ...state,
        activeFilter: action.payload,
      };
    default:
      return state;
  }
};
