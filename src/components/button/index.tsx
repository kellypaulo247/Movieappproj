import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../assets/colors';

type Props = {title: string} & React.ComponentProps<typeof TouchableOpacity>;

export const CustomButton = ({title, ...props}: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    width: '100%',
    height: 45,
    backgroundColor: colors.blue,
  },
  title: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
  },
});
