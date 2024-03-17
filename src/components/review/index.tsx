import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import FastImage from 'react-native-fast-image';

import {IMovieReviews} from '../../interfaces/movie-review';

import {getImage} from '../../utils/get-image';

import {colors} from '../../assets/colors';
import {DefaultUser} from '../../assets/images';
import ViewMore from '../view-more';

type Props = IMovieReviews['results'][number];

const Review = (props: Props) => {
  return (
    <View style={styles.componentBody}>
      <View style={styles.authorContainer}>
        <FastImage
          source={
            props.author_details.avatar_path
              ? {uri: getImage(props.author_details.avatar_path)}
              : DefaultUser
          }
          style={{width: 40, height: 40, borderRadius: 50}}
        />
        <Text style={{color: colors.blue}}>
          {props.author_details.rating || '0.0'}
        </Text>
      </View>
      <View style={{flexGrow: 1}}>
        <Text style={styles.authorName}>
          {props.author_details.name || props.author}
        </Text>
        <ViewMore value={props.content} />
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  componentBody: {width: '100%', flexDirection: 'row', gap: 16},
  authorContainer: {
    alignItems: 'center',
    gap: 16,
  },
  authorName: {fontWeight: '600', color: colors.white},
});
