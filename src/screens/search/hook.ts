import React from 'react';
import {
  IMovieSearchResponse,
  IMovieSearchResult,
} from '../../interfaces/movie-search';
import {useApiFetch} from '../../hook/api-fetch';
import {endPoints} from '../../api/endpoints';

export const useSearchHook = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const [data, setData] = React.useState<IMovieSearchResult[]>([]);

  const handleOnSearch = async () => {
    if (searchTerm === '') return;

    try {
      const results = (
        await useApiFetch<IMovieSearchResponse>(endPoints.search + searchTerm)
      ).data.results;

      setData(results);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    searchTerm,
    setSearchTerm,
    data,
    handleOnSearch,
  };
};
