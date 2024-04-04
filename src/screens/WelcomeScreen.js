import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>TalkPilot</Text>
      <Text style={{fontWeight: '400', fontSize: 16}}>
        Voice the Direction, Enjoy the Journey
      </Text>
      <Image
        source={require('../assets/images/mic.png')}
        style={{resizeMode: 'contain', width: 80, height: 120}}
      />
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
