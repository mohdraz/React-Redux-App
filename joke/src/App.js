import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchJoke } from "./actions";

function App(props) {
  useEffect(() => {
    props.fetchJoke();
  }, []);

  return (
    <div className="container">
      <button
        onClick={e => {
          e.preventDefault();
          props.fetchJoke();
        }}
      >
        Generate Another Joke
      </button>
      {props.error && <div>{props.error}</div>}
      {props.isLoading ? (
        <div>Loading Joke...</div>
      ) : (
        <div className="joke">
          <h1>Joke</h1>
          <p>{props.joke.delivery}</p>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    joke: state.joke,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchJoke })(App);
