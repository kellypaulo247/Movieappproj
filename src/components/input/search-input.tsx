import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SearchIcon} from '../../assets/icons';
import {colors} from '../../assets/colors';

type Props = {} & React.ComponentProps<typeof TextInput>;

export const SearchInput = ({...props}: Props) => {
  return (
    <View style={styles.componentBody}>
      <TextInput
        style={styles.input}
        {...props}
        placeholder="Search"
        placeholderTextColor={colors.secondary}></TextInput>
      <Image style={styles.icon} source={SearchIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  componentBody: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 16,
    backgroundColor: colors.dark_gray,
    borderRadius: 16,
    width: '100%',
  },
  input: {
    flexGrow: 1,
    color: colors.white,
  },
  icon: {
    tintColor: colors.secondary,
    width: 20,
    height: 20,
  },
});
