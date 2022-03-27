import React, { Suspense } from "react";
import { useQuery, useQueryErrorResetBoundary } from "react-query";
import { ErrorBoundary } from "react-error-boundary";

import { getMovieList } from "../api/movie";
import MovieList from "../components/MovieList";

function Movie() {
  const { reset } = useQueryErrorResetBoundary();

  const { data } = useQuery("movieList", getMovieList, {
    suspense: true,
  });

  return (
    <Suspense fallback={<h1>Loading Movies...</h1>}>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={() => <div>There was an error!</div>}
      >
        <MovieList data={data} />
      </ErrorBoundary>
    </Suspense>
  );
}

export default Movie;
