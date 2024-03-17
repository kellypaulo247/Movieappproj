import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMovieSearchResult} from '../../interfaces/movie-search';

type Props = {
  path: string;
};

const DetailedMovieCard: React.FC<IMovieSearchResult> = props => {
  return (
    <View>
      <Text>DetailedMovieCard</Text>
    </View>
  );
};

export default DetailedMovieCard;

const styles = StyleSheet.create({});
