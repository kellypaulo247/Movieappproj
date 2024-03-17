import {ScrollView, View} from 'react-native';
import React, {useEffect} from 'react';

import {styles} from './Styles';
import {CustomHeader} from '../../components/header';
import {EmpyWishList} from '../../components/info/empty-wishlist';
import {useNavigation} from '@react-navigation/native';
import {useApiFetch} from '../../hook/api-fetch';
import {endPoints} from '../../api/endpoints';
import {useAuthContext} from '../../context/auth';
import {IMovieResult, IMoviesListResponse} from '../../interfaces/movie-lists';
import MovieImageCard from '../../components/card/movie';

const WatchListScreen = () => {
  const {userAccount} = useAuthContext();

  const {addListener} = useNavigation();

  const [data, setData] = React.useState<IMovieResult[]>();

  async function getWatchList() {
    try {
      const response = await useApiFetch<IMoviesListResponse>(
        endPoints.addWatchlist + userAccount?.id + endPoints.listWatchlist,
      );

      setData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  addListener('focus', () => {
    getWatchList();
  });

  return (
    <View style={styles.body}>
      <CustomHeader title="WatchList" isTitleOnly />

      <ScrollView
        contentContainerStyle={{
          gap: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {data?.length === 0 ? (
          <View style={styles.infoContainer}>
            <EmpyWishList />
          </View>
        ) : (
          data?.map(movie => (
            <View key={movie.id}>
              <MovieImageCard path={movie?.poster_path} id={movie.id} small />
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default WatchListScreen;
