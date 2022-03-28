/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

import { Movie } from "../interfaces/api/movie";

interface iMovieItem {
  movie: Movie;
}

const movie__container = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  width: 300px;
  -webkit-box-shadow: 4px 4px 20px 10px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 4px 4px 20px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 4px 4px 20px 10px rgba(0, 0, 0, 0.1);
`;

const movie__image = css`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const movie__info = css`
  display: flex;
  flex-direction: column;
  padding: 14px;
  background-color: #ffffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

function MovieItem({ movie }: iMovieItem) {
  let navigate = useNavigate();
  return (
    <div css={movie__container} onClick={() => navigate(`/movie/${movie.id}`)}>
      <img
        css={movie__image}
        src={movie.medium_cover_image}
        alt={movie.title}
      />
      <div css={movie__info}>
        <div
          css={css`
            padding-bottom: 10px;
          `}
        >
          <span
            css={css`
              font-size: 16px;
              font-weight: bold;
              padding-right: 10px;
            `}
          >
            {movie.title}
          </span>
          <span
            css={css`
              font-size: 12px;
              color: #383838;
            `}
          >
            {movie.rating}
          </span>
        </div>
        <div>
          <span
            css={css`
              font-size: 14px;
              color: #000000;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3; /* 라인수 */
              -webkit-box-orient: vertical;
              word-wrap: break-word;
              line-height: 1.2em;
              height: 3.6em; /* line-height 가 1.2em 이고 3라인을 자르기 때문에 height는 1.2em * 3 = 3.6em */
            `}
          >
            <span
              css={css`
                font-size: 14px;
                color: #383838;
                margin-right: 8px;
              `}
            >
              {movie.genres[0]}
            </span>
            {movie.summary}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
