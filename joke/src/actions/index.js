import axios from "axios";

export const LOADING_START = "LOADING_START";
export const LOADING_SUCCESS = "LOADING_SUCCESS";
export const LOADING_FAILED = "LOADING_FAILED";

export const fetchJoke = () => dispatch => {
  dispatch({ type: LOADING_START });
  axios
    .get("https://sv443.net/jokeapi/category/Any")
    .then(res =>
      dispatch({
        type: LOADING_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => dispatch({ type: LOADING_FAILED, payload: err.response }));
};
