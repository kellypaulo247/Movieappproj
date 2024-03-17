import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {AuthContextProvider} from '../context/auth';

import {MainStack} from './stack';
import {TabContextProvider} from '../context/tab';

const RootRouter = () => {
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setBarStyle('light-content');

  return (
    <AuthContextProvider>
      <TabContextProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </TabContextProvider>
    </AuthContextProvider>
  );
};

export default RootRouter;
