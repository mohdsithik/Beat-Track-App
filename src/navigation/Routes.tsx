import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  LandingScreen: undefined;
  MusicScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
