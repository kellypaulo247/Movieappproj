import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NoResultsFImage} from '../../assets/images';
import {colors} from '../../assets/colors';
import {deviceWidth} from '../../utils/device-dimensions';

export const NoResults = () => {
  return (
    <View style={styles.componentBody}>
      <Image style={styles.image} source={NoResultsFImage} />
      <Text style={styles.text1}>
        while (condition) {}e are sorry, we can not find the movie :(
      </Text>
      <Text style={styles.text2}>
        Find your movie by Type title, categories, years, etc
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  componentBody: {
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceWidth / 1.75,
    gap: 14,
  },
  image: {
    width: 75,
    height: 75,
  },
  text1: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  text2: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.secondary,
  },
});
