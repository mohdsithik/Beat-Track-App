import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenNames } from '../../navigation/types';
import { RootStackScreenProps } from '../../navigation/Routes';
import Styles from './Styles';

const LandingScreen = ({
  navigation,
}: RootStackScreenProps<'LandingScreen'>) => {
  return (
    <View style={Styles.container}>
      <Text style={{ fontSize: 20 }}>LandingScreen</Text>
      <Button
        title="Go to Music"
        onPress={() => navigation.navigate(ScreenNames.MusicScreen)}
      />
    </View>
  );
};

export default LandingScreen;
