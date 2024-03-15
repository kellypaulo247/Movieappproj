import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {AuthContextProvider} from '../context/auth';

import {MainStack} from './stack';

const RootRouter = () => {
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setBarStyle('dark-content');

  return (
    <AuthContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default RootRouter;
