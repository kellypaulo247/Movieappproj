import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {SearchInput} from '../../components/input/search-input';
import {CustomHeader} from '../../components/header';
import {NoResults} from '../../components/info/movie-not-found';

const SearchScreen = () => {
  return (
    <View style={styles.body}>
      <CustomHeader title="Search" isTitleOnly />
      <SearchInput />

      <View style={styles.contentContainer}>
        <NoResults />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 160,
  },
});
