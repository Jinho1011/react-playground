/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { useQuery } from "react-query";

import { getMovieById } from "../api/movie";

interface iDetailItem {
  id: string | undefined;
}

function DetailItem({ id }: iDetailItem) {
  const { data } = useQuery("movie", () => getMovieById(Number(id)), {
    suspense: true,
  });

  return <div>I'm {data?.data.movie.title}</div>;
}

export default DetailItem;
