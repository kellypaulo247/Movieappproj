export const endPoints = {
  /* auth */
  requestToken: 'authentication/token/new',
  login: 'authentication/token/validate_with_login',
  session: 'authentication/session/new',

  /* account */
  addWatchlist: '/account/',
  listWatchlist: '/watchlist/movies',
  rateMovie: '/movie/:movie_id/rating',
  account: '/account',

  nowPlaying: '/movie/now_playing?language=en-US&page=1',
  popular: '/movie/popular?language=en-US&page=1',
  topRated: '/movie/top_rated?language=en-US',
  upcoming: '/movie/upcoming?language=en-US&page=1',

  /* search */
  search: '/search/movie?query=',

  /* details */
  movieDetails: '/movie/',
  credits: '/credits?language=en-US&page=1',
  reviews: '/reviews?language=en-US&page=1',
};
