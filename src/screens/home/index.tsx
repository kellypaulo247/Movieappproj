import {ScrollView, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {TopRated} from '../../components/topRated';

import {styles} from './Styles';
import {useApiFetch} from '../../hook/api-fetch';

import {endPoints} from '../../api/endpoints';

import {IMovieResult, IMoviesListResponse} from '../../interfaces/movie-lists';
import HomeTabs from '../../components/tabs/home-tabs';

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

      <ScrollView>
        <TopRated data={top5} />

        <HomeTabs />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
