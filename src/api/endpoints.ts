import { create } from "react-test-renderer";

export const endPoints = {
  nowPlaying: '/movie/now_playing?language=en-US&page=1',
  popular: '/movie/popular?language=en-US&page=1',
  topRated: '/movie/top_rated?language=en-US',
  upcoming: '/movie/upcoming?language=en-US&page=1',
  RequestToken: '/authentication/token/new',
  Login: '/authentication/token/validate_with_login',
  createSession: '/authentication/session/new',

  /* search */
  search: '/search/movie?query=',

  /* details */
  movieDetails: '/movie/',
};
