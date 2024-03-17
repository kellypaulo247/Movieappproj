import {FlatList, StyleSheet, Text, View} from 'react-native';
import {IMovieResult} from '../../interfaces/movie-lists';
import React from 'react';
import MovieImageCard from '../card/movie';

type Props = {
  data: IMovieResult[];
};

export const TopRated: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.componentBody}>
      <FlatList
        data={data || []}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 20}}
        renderItem={({item, index}) => (
          <MovieImageCard
            path={item?.poster_path}
            id={item.id}
            isTop5
            top5Index={index + 1}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentBody: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
});
