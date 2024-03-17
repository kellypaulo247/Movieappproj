import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {useAuthContext} from '../../context/auth';
import {getImage} from '../../utils/get-image';
import {CustomInput} from '../../components/input';
import {CustomButton} from '../../components/button';
import {removeSession} from '../../utils/storage';

export const ProfileScreen = () => {
  const {userAccount, updateLoggedIn} = useAuthContext();

  const handleLogout = () => {
    removeSession().then(() => {
      updateLoggedIn?.(false);
    });
  };

  return (
    <View style={styles.body}>
      <FastImage
        source={{priority: 'high', uri: getImage(userAccount?.avatar!)}}
        style={{width: 150, height: 150, borderRadius: 75}}
      />

      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
        }}>
        {userAccount?.username}
      </Text>
      <Text> {userAccount?.id} </Text>

      <CustomButton title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
