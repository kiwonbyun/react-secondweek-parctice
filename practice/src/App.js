import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMovie } from "./redux/modules/movieredux";
import Home from "./Home";
import Detail from "./Detail";
import Spinner from "./Spinner";

function App() {
  const dispatch = useDispatch();
  const movieArr = useSelector((state) => state.movieredux.list);
  const is_loaded = useSelector((state) => state.movieredux.is_loaded);
  const createMovies = async () => {
    const data = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await data.json();

    dispatch(createMovie(json.data.movies));
  };
  useEffect(() => {
    createMovies();
  }, []);
  return (
    <Router>
      <Reset />
      <Switch>
        {is_loaded ? null : <Spinner />}
        <Route path="/movie/:index" exact>
          <Detail />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
