import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import FastImage from 'react-native-fast-image';

import {getImage} from '../../utils/get-image';
import {top5Rate} from '../../utils/top5-rate';

import {MainStackParamList} from '../../router/_types';

type NavigationProp = StackNavigationProp<MainStackParamList>;

type Props = {
  isTop5?: boolean;
  top5Index?: number;
  path: string;
  id: number;
};

function getDimensions(index: number) {
  if (index === 1) {
    return {
      height: 88,
      width: 36,
    };
  } else if (index === 4 || index === 5) {
    return {
      height: 88,
      width: 78,
    };
  } else {
    return {
      height: 88,
      width: 70,
    };
  }
}

const MovieImageCard: React.FC<Props> = ({path, id, isTop5, top5Index}) => {
  const navigation = useNavigation<NavigationProp>();

  const handleOnMovieDetails = () => {
    navigation.navigate('MovieDetails', {id});
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleOnMovieDetails}
      style={{
        position: 'relative',
        width: 150,
        height: 250,
        marginHorizontal: 10,
      }}>
      <FastImage
        source={{uri: getImage(path)}}
        style={{width: '95%', height: '95%', borderRadius: 16}}
        resizeMode="cover"
      />
      {isTop5 && top5Index && (
        <Image
          source={top5Rate(top5Index)}
          style={{
            position: 'absolute',
            bottom: -8,
            left: -12,
            ...getDimensions(top5Index),
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default MovieImageCard;

const styles = StyleSheet.create({});
