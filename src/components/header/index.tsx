import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LeftArrowIcon} from '../../assets/icons';
import {colors} from '../../assets/colors';

type Props = {
  title: string;
  isTitleOnly?: boolean;
  Right?: () => JSX.Element;
};

export const CustomHeader = ({title, Right, isTitleOnly}: Props) => {
  return (
    <View
      style={[
        styles.componentBody,
        {justifyContent: isTitleOnly ? 'center' : 'space-between'},
      ]}>
      {!isTitleOnly && <Image style={styles.icon} source={LeftArrowIcon} />}

      <Text style={styles.text}>{title}</Text>

      {Right && !isTitleOnly && <Right />}
    </View>
  );
};

const styles = StyleSheet.create({
  componentBody: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    width: '100%',
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
