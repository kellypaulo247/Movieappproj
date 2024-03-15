import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTc3M2Y0YzAxNGE0MzFmMWI1NTcyM2M2NjUyMzFkNCIsInN1YiI6IjY1ZjFiYTYxZDY0YWMyMDE2NDVlNTJmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dAxwUZuy-9K8BnqH5iYq6aDv-C-LqcEFz_-zu7LPQjI',
  },
});
