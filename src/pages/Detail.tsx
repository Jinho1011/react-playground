import React, { Suspense } from "react";
import { useParams } from "react-router";
import { ErrorBoundary } from "react-error-boundary";

import DetailItem from "../components/DetailItem";

function Detail() {
  const params = useParams();

  return (
    <ErrorBoundary fallbackRender={() => <div>There was an error!</div>}>
      <Suspense fallback={<h1>Loading Movies...</h1>}>
        <DetailItem id={params?.id} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default Detail;
