import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import MovieList from "../components/MovieList";

function Movie() {
  return (
    <ErrorBoundary fallbackRender={() => <div>There was an error!</div>}>
      <Suspense fallback={<h1>Loading Movies...</h1>}>
        <MovieList />
      </Suspense>
    </ErrorBoundary>
  );
}

export default Movie;
