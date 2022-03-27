/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

import MovieItem from "./MovieItem";
import { YTS } from "../interfaces/api/movie";

interface iMovieList {
  data: YTS | undefined;
}

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

function MovieList({ data }: iMovieList) {
  return (
    <div className="container">
      <div css={title__container}>
        <span className="title">Movie Lists</span>
      </div>
      <div css={movies__container}>
        {data?.data.movies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default MovieList;
