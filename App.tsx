import React from 'react';
import { Text, View } from 'react-native';
import FontStyles from './src/assets/stylesheets/FontStyles';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ ...FontStyles.poppinM12Blue }}>Hello Sithik</Text>
    </View>
  );
};

export default App;
