import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {colors} from '../../assets/colors';
import {HomeIcon, SearchIcon, WatchListIcon} from '../../assets/icons';

import HomeScreen from '../../screens/home';
import SearchScreen from '../../screens/search';
import WatchListScreen from '../../screens/watch-list';

import {TabView} from '../../components/button/tab-view';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      sceneContainerStyle={{
        backgroundColor: colors.primary,
        paddingTop: 50,
        paddingHorizontal: 20,
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 69,
          backgroundColor: colors.primary,
          borderTopColor: colors.blue,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabView focused={focused} icon={HomeIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabView focused={focused} icon={SearchIcon} />
          ),
        }}
      />

      <Tab.Screen
        name="watchlist"
        component={WatchListScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabView focused={focused} icon={WatchListIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
