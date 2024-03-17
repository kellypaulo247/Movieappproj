import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackScreenProps} from '@react-navigation/stack';

type RootStackParamList = {
  Main: NavigatorScreenParams<BottomTabsParamList>;
  Login: undefined;
  Splash: undefined;
  MovieDetails: {
    id: number;
  };
};

type MainStackParamList = {
  MovieDetails: {
    id: number;
  };
};

type BottomTabsParamList = {
  home: undefined;
  profile: undefined;
  search: undefined;
  watchList: undefined;
};

type MainScreensNavigationType = CompositeScreenProps<
  BottomTabScreenProps<BottomTabsParamList, 'home'>,
  StackScreenProps<MainStackParamList, 'MovieDetails'>
>;

export type {
  BottomTabsParamList,
  RootStackParamList,
  MainStackParamList,
  MainScreensNavigationType,
};
