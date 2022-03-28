/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { useQuery } from "react-query";

import { getMovieList } from "../api/movie";
import MovieItem from "./MovieItem";

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

function MovieList() {
  const [page, setPage] = useState<number>(1);
  const { data } = useQuery(["movieList", page], () => getMovieList(page), {
    suspense: true,
    keepPreviousData: true,
  });

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
      <div>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <span>Current Page: {page}</span>
        <button
          onClick={() => {
            setPage((old) => old + 1);
          }}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default MovieList;
