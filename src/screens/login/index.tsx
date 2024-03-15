import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

import {CustomInput} from '../../components/input';

import {Logo} from '../../assets/images';
import {PasswordIcon} from '../../assets/icons';
import {CustomButton} from '../../components/button';

const LoginScreen = () => {
  return (
    <View style={styles.body}>
      <Image source={Logo} />

      <CustomInput icon={PasswordIcon} placeholder="Password" password />

      <CustomButton title="Login" />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    gap: 18,
  },
});
