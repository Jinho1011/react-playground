/** @jsxImportSource @emotion/react */
import React, { Suspense } from "react";
import { css } from "@emotion/react";
import { useQuery } from "react-query";

import { getMovieList } from "../api/movie";
import MovieList from "../components/MovieList";

function Movie() {
  const { isLoading, error, data } = useQuery("movieList", getMovieList, {
    suspense: true,
  });

  return <MovieList data={data} />;
}

export default Movie;
