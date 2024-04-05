import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '../components/features';
import {dummyMessages} from '../constant';

const HomeScreen = () => {
  const [messages, setMessages] = useState(dummyMessages);
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
      <SafeAreaView style={{flex: 1}}>
        <Image
          source={require('../assets/images/mic.png')}
          style={{width: wp(25), height: wp(25), alignSelf: 'center'}}
        />
        {messages.length > 0 ? (
          <View style={{flex: 1}}>
            <Text
              style={{
                fontFamily: 'JetBrainsMono-Bold',
                color: 'gray',
                fontSize: wp(4.5),
                marginTop: 10,
              }}>
              Assistant
            </Text>
            <View
              style={{
                height: hp(60),
                backgroundColor: '#DFDFDF',
                borderRadius: 20,
                marginTop: 10,
              }}>
              <ScrollView>
                {messages.map((message, index) => {
                  if (message.role === 'assistant') {
                    if (message.content.includes('https')) {
                      return (
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                          }}
                          key={index}>
                          <View
                            style={{
                              backgroundColor: '#FFF3A1',
                              borderRadius: 20,
                              paddingHorizontal: 10,
                              paddingVertical: 8,
                              margin: 8,
                              borderTopLeftRadius: 0,
                            }}>
                            <Image
                              source={{uri: message.content}}
                              style={{
                                resizeMode: 'contain',
                                height: wp(60),
                                width: wp(60),
                              }}
                            />
                          </View>
                        </View>
                      );
                    } else {
                      return (
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                          }}
                          key={index}>
                          <View
                            style={{
                              width: wp(70),
                              backgroundColor: '#FFF3A1',
                              borderRadius: 20,
                              paddingHorizontal: 10,
                              paddingVertical: 8,
                              margin: 8,
                              borderTopLeftRadius: 0,
                            }}>
                            <Text>{message.content}</Text>
                          </View>
                        </View>
                      );
                    }
                  } else {
                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                        }}
                        key={index}>
                        <View
                          style={{
                            width: wp(70),
                            backgroundColor: 'white',
                            borderRadius: 20,
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            margin: 8,
                            borderTopRightRadius: 0,
                          }}>
                          <Text>{message.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
