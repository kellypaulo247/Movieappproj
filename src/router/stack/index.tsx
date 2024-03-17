import {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useAuthContext} from '../../context/auth';

import {BottomTabs} from '../bottom-tab';
import {RootStackParamList} from '../_types';

import {retrieveSession} from '../../utils/storage';

import MovieDetailsScreen from '../../screens/movie-details';
import LoginScreen from '../../screens/login';
import {colors} from '../../assets/colors';
import SplashScreen from '../../screens/splash';
import {useApiFetch} from '../../hook/api-fetch';
import {User} from '../../interfaces/auth';
import {endPoints} from '../../api/endpoints';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStack = () => {
  const {loggedIn, updateLoggedIn, splashScreen, updateUserAccount} =
    useAuthContext();

  async function getAccountData() {
    try {
      const account = await useApiFetch<User>(endPoints.account);
      updateUserAccount?.(account?.data); // update user account
    } catch (error) {
      console.log('Account=>' + error);
    }
  }

  async function checkSession() {
    const session = await retrieveSession();

    if (session) {
      getAccountData();
      updateLoggedIn?.(true);
    } else updateLoggedIn?.(false);
  }

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.primary,
          paddingTop: 50,
        },
      }}>
      {splashScreen ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : loggedIn ? (
        <Stack.Group screenOptions={{animation: 'ios'}}>
          <Stack.Screen name="Main" component={BottomTabs} />
          <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        </Stack.Group>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};
