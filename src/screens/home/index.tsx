import {Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {SearchInput} from '../../components/input/search-input';
import {TopRated} from '../../components/topRated';

import {styles} from './Styles';
import {useApiFetch} from '../../hook/api-fetch';

import {endPoints} from '../../api/endpoints';

import {IMovieResult, IMoviesListResponse} from '../../interfaces/movie-lists';

const HomeScreen = () => {
  const [top5, setTop5] = React.useState<IMovieResult[]>([]);

  async function getData() {
    const res = await useApiFetch<IMoviesListResponse>(endPoints.topRated);
    setTop5(res.data.results.slice(0, 5));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.body}>
      <Text style={styles.h1}>What do you want to watch?</Text>
      <SearchInput />

      <TopRated data={top5} />
    </View>
  );
};

export default HomeScreen;


