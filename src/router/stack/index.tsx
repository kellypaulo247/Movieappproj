import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useAuthContext} from '../../context/auth';

import LoginScreen from '../../screens/login';
import MovieDetailsScreen from '../../screens/movie-details';

import {BottomTabs} from '../bottom-tab';
import {RootStackParamList} from '../_types';

import {colors} from '../../assets/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStack = () => {
  const {loggedIn} = useAuthContext();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.primary,
          paddingTop: 50,
        },
      }}>
      {!loggedIn ? (
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
