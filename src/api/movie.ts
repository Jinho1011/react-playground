import { YTS } from "../interfaces/api/movie";

export const getMovieList = async (): Promise<YTS> => {
  const response = await fetch(
    "https://yts.mx/api/v2/list_movies.json?limit=50&sort_by=like_count"
  );
  const data = await response.json();
  return data;
};
