import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const WelcomeScreen = ({navigation}) => {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontSize: wp(8),
            color: 'black',
            fontFamily: 'JetBrainsMono-ExtraBold',
          }}>
          TalkPilot
        </Text>
        <Text
          style={{
            fontFamily: 'JetBrainsMono-Medium',
            fontSize: wp(3),
            color: 'black',
          }}>
          Voice the Direction, Enjoy the Journey
        </Text>
      </View>
      <Image
        source={require('../assets/images/mic.png')}
        style={{resizeMode: 'contain', width: wp(75), height: hp(25)}}
      />
      <TouchableOpacity
        style={{
          width: '95%',
          backgroundColor: '#607D8B',
          height: 45,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text
          style={{
            fontFamily: 'JetBrainsMono-SemiBold',
            fontSize: wp(4),
            color: 'white',
          }}>
          Get started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
