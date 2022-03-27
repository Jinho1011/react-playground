/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useQuery } from "react-query";

import { getMovieList } from "../api/movie";
import MovieItem from "../components/MovieItem";

const title__container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const movies__container = css`
  display: grid;
  grid-template-columns: 300px 300px;
  row-gap: 30px;
  column-gap: 20px;
`;

function Movie() {
  const { isLoading, error, data } = useQuery("movieList", getMovieList);

  return (
    <div className="container">
      <div css={title__container}>
        <span className="title">Movie Lists</span>
      </div>
      {isLoading ? (
        "loading"
      ) : (
        <div css={movies__container}>
          {data?.data.movies.map((movie) => {
            return <MovieItem key={movie.id} movie={movie} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Movie;
