import {Image, View} from 'react-native';
import React, {useState} from 'react';

import {CustomInput} from '../../components/input';
import {CustomButton} from '../../components/button';

import {Logo} from '../../assets/images';
import {PasswordIcon, ProfileIcon} from '../../assets/icons';

import {styles} from './Styles';
import {useLoginHook} from './hook';

const LoginScreen = () => {
  const {handleLogin, setForm, form} = useLoginHook();

  return (
    <View style={styles.body}>
      <Image source={Logo} />

      <CustomInput
        icon={ProfileIcon}
        placeholder="Username"
        onChangeText={value => setForm({...form, username: value})}
      />
      <CustomInput
        icon={PasswordIcon}
        placeholder="Password"
        password
        onChangeText={value => setForm({...form, password: value})}
      />

      <CustomButton title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
