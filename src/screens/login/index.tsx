import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {CreateTokenResponse,LoginSessionRequest,LoginSessionResponse,CreateSessionRequest,CreateSessionResponse} from '../../interfaces/Login/LoginTypeslist';
import {endPoints} from '../../api/endpoints';
import {useRoute} from '@react-navigation/native';
import {useApiFetch} from '../../hook/api-fetch';
import {useApiPost} from '../../hook/api-post';

import {CustomInput} from '../../components/input';
import {styles} from './Styles';
import {Logo} from '../../assets/images';
import {PasswordIcon} from '../../assets/icons';
import {CustomButton} from '../../components/button';

const LoginScreen = () => {
  const [requestToken, setRequestToken] = useState<CreateTokenResponse | null>(null);
  const [loginToken, setLoginToken] = useState<LoginSessionResponse | null>(null);
  const [sessionId, setSessionId] = useState<CreateSessionResponse | null>(null);

 
  const handleLogin = async () => {
    try {
      if (!requestToken) {
        const resToken = await useApiFetch<CreateTokenResponse>(endPoints.RequestToken);
        setRequestToken(resToken.data);
  
      }

      if (requestToken) {
        const bodyParamData: LoginSessionRequest = {
          username: "kelsonPaulo",
          password: "CodingTesting123",
          request_token: requestToken.request_token,
        };

        const resLogin = await useApiPost<LoginSessionResponse>(endPoints.Login, bodyParamData);
        setLoginToken(resLogin.data);
        console.log('******************');
        console.log(resLogin.data , 'Login');
        console.log('******************');
      }

      if (loginToken && !sessionId) {
        const bodyParamData: CreateSessionRequest = {
          request_token: loginToken.request_token,
        };

        const resSession = await useApiPost<CreateSessionResponse>(endPoints.createSession, bodyParamData);
        setSessionId(resSession.data);
        
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
   
    // useEffect(() => {
    //   handleLogin();
    // }, []);

  return (
    <View style={styles.body}>
      <Image source={Logo} />

      <CustomInput icon={PasswordIcon} placeholder="Password" password />

      <CustomButton title="Login" onPress={handleLogin}/>
    </View>
  );
};

export default LoginScreen;


