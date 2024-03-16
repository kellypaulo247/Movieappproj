import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';

import {useRoute} from '@react-navigation/native';

import {endPoints} from '../../api/endpoints';

import {styles} from './Styles';

import {WatchListFilledIcon} from '../../assets/icons';
import {colors} from '../../assets/colors';

import {IMovieDetails} from '../../interfaces/movie';

import {useApiFetch} from '../../hook/api-fetch';

import {CustomHeader} from '../../components/header';
import {MovieDetailsComponent} from '../../components/movie-details';

type MovieDetailsScreenRouteProp = {
  name: string;
  key: string;
  params: {
    id: number;
  };
};

const MovieDetailsScreen = () => {
  const route = useRoute<MovieDetailsScreenRouteProp>();

  const {id} = route.params;

  const [movie, setMovie] = React.useState<IMovieDetails>();
  const [loading, setLoading] = React.useState<boolean>(false);

  async function getMovieDetails() {
    const res = await useApiFetch<IMovieDetails>(endPoints.movieDetails + id);
    setMovie(res.data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);

    getMovieDetails();
  }, [id]);

  return (
    <View style={styles.body}>
      <View
        style={{width: '100%', alignItems: 'center', paddingHorizontal: 20}}>
        <CustomHeader
          title="Details"
          Right={() => {
            return (
              <TouchableOpacity>
                <Image
                  source={WatchListFilledIcon}
                  style={styles.headerRight}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <MovieDetailsComponent {...movie!} />
      )}
    </View>
  );
};

export default MovieDetailsScreen;


