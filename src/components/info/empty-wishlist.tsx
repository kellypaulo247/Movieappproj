import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {MagicBox} from '../../assets/images';
import {colors} from '../../assets/colors';

export const EmpyWishList = () => {
  return (
    <View style={styles.componentBody}>
      <Image style={styles.image} source={MagicBox} />
      <Text style={styles.text1}>There is no movie yet!</Text>
      <Text style={styles.text2}>
        Find your movie by Type title, categories, years, etc{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  componentBody: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
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
