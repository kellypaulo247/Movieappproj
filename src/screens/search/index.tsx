import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import React from 'react';

/* components */
import {SearchInput} from '../../components/input/search-input';
import {CustomHeader} from '../../components/header';
import {NoResults} from '../../components/info/movie-not-found';
import MovieImageCard from '../../components/card/movie';

import {styles} from './Styles';
import {useSearchHook} from './hook';

const SearchScreen = () => {
  const {data, handleOnSearch, searchTerm, setSearchTerm} = useSearchHook();

  return (
    <KeyboardAvoidingView style={styles.body}>
      <CustomHeader title="Search" isTitleOnly />
      <SearchInput
        onChangeText={setSearchTerm}
        onSubmitEditing={handleOnSearch}
      />

      <View style={styles.contentContainer}>
        {data?.length === 0 ? (
          <View style={styles.noContentContainer}>
            <NoResults />
          </View>
        ) : (
          <ScrollView contentContainerStyle={styles.scrollContentContainer}>
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
