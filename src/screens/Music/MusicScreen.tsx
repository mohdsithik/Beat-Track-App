import React from 'react';
import { View, Text, Button } from 'react-native';
import { ScreenNames } from '../../navigation/types';
import { RootStackScreenProps } from '../../navigation/Routes';

const MusicScreen = ({}: RootStackScreenProps<'MusicScreen'>) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>MusicScreen</Text>
    </View>
  );
};

export default MusicScreen;
