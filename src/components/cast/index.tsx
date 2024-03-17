import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {getImage} from '../../utils/get-image';

type Props = {
  path: string;
  name: string;
};

const Cast = ({name, path}: Props) => {
  return (
    <View style={{alignItems: 'center', gap: 10, width: 120}}>
      <FastImage
        source={{uri: getImage(path)}}
        style={{width: 100, height: 100, borderRadius: 100}}
      />
      <Text style={{color: 'white', fontWeight: '600', textAlign: 'center'}}>
        {name}
      </Text>
    </View>
  );
};

export default Cast;

const styles = StyleSheet.create({});
