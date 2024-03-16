import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';

import {SearchInput} from '../../components/input/search-input';
import {CustomHeader} from '../../components/header';
import {NoResults} from '../../components/info/movie-not-found';
import {endPoints} from '../../api/endpoints';
import {
  IMovieSearchResponse,
  IMovieSearchResult,
} from '../../interfaces/movie-search';
import {useApiFetch} from '../../hook/api-fetch';
import {deviceHeight, deviceWidth} from '../../utils/device-dimensions';
import DetailedMovieCard from '../../components/card/detailed-movie';
import MovieImageCard from '../../components/card/movie';

const SearchScreen = () => {
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

  return (
    <KeyboardAvoidingView style={styles.body}>
      <CustomHeader title="Search" isTitleOnly />
      <SearchInput
        onChangeText={setSearchTerm}
        onSubmitEditing={handleOnSearch}
      />

      <View style={styles.contentContainer}>
        {data?.length === 0 ? (
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: deviceWidth / 2,
            }}>
            <NoResults />
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={{
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {data?.map((movie, index) => (
              <View key={index}>
                <MovieImageCard path={movie?.poster_path} id={movie.id} />
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    flexWrap: 'wrap',
    gap: 4,
    alignItems: 'center',
    marginTop: 16,
    paddingBottom: deviceHeight / 4.8,
  },
  image: {
    width: 200,
    height: 160,
  },
});
