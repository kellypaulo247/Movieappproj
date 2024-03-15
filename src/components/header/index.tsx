import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LeftArrowIcon} from '../../assets/icons';
import {colors} from '../../assets/colors';

type Props = {
  title: string;
  isTitleOnly?: boolean;
  right?: any;
};

export const CustomHeader = ({title, right, isTitleOnly}: Props) => {
  return (
    <View
      style={[
        styles.componentBody,
        {justifyContent: isTitleOnly ? 'center' : 'space-between'},
      ]}>
      {!isTitleOnly && <Image source={LeftArrowIcon} />}

      <Text style={styles.text}>{title}</Text>

      {right && !isTitleOnly && <Image source={right} />}
    </View>
  );
};

const styles = StyleSheet.create({
  componentBody: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  icon: {
    tintColor: colors.white,
    width: 20,
    height: 20,
  },
});
