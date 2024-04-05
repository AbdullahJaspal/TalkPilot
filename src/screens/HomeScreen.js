import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '../components/features';

const HomeScreen = () => {
  const [messages, setMessages] = useState([]);
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 10}}>
      <SafeAreaView style={{flex: 1}}>
        <Image
          source={require('../assets/images/mic.png')}
          style={{width: wp(25), height: wp(25), alignSelf: 'center'}}
        />
        {messages.length > 0 ? <View></View> : <Features />}
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
