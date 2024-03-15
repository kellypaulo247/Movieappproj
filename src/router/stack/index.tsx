import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useAuthContext} from '../../context/auth';

import LoginScreen from '../../screens/login';
import {colors} from '../../assets/colors';

import {BottomTabs} from '../bottom-tab';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  const {loggedIn} = useAuthContext();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: colors.primary},
      }}>
      {!loggedIn ? (
        <Stack.Screen name="Home" component={BottomTabs} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};
