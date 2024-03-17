import axios from 'axios';
import {retrieveSession} from '../utils/storage';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
  },
  params: {
    api_key: '5a773f4c014a431f1b55723c665231d4',
  },
});

api.interceptors.request.use(async request => {
  const session = await retrieveSession();

  request.params['session_id'] = session;

  return request;
});
