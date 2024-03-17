import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMovieResult} from '../../interfaces/movie-lists';
import MovieImageCard from '../card/movie';
import {deviceWidth} from '../../utils/device-dimensions';

type Props = {
  data?: IMovieResult[];
};

const MoviesWrapper = ({data}: Props) => {
  return (
    <View style={styles.componentBody}>
      {data?.map(movie => (
        <MovieImageCard
          key={movie.id}
          id={movie.id}
          path={movie.poster_path}
          small
        />
      ))}
    </View>
  );
};

export default MoviesWrapper;

const styles = StyleSheet.create({
  componentBody: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    marginBottom: deviceWidth / 2,
  },
});
