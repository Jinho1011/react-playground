import { YTS } from "../interfaces/api/movie";
import { Detail } from "../interfaces/api/detail";

export const getMovieList = async (page: number): Promise<YTS> => {
  const response = await fetch(
    `https://yts.mx/api/v2/list_movies.json?limit=6&sort_by=like_count&page=${page}`
  );
  const data = await response.json();
  return data;
};

export const getMovieById = async (id: number): Promise<Detail> => {
  const response = await fetch(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
  );
  const data = await response.json();
  return data;
};
