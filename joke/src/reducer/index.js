import { LOADING_START, LOADING_SUCCESS, LOADING_FAILED } from "../actions";

const initialState = {
  joke: [],
  isLoading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case LOADING_SUCCESS:
      return {
        ...state,
        joke: action.payload,
        isLoading: false,
        error: ""
      };
    case LOADING_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
