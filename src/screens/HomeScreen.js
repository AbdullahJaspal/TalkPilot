import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '../components/features';
import {dummyMessages} from '../constant';

const HomeScreen = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  function clear() {
    setMessages([]);
  }
  function stop() {
    setSpeaking(false);
  }
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
                              backgroundColor: '#94A6AE',
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
                              backgroundColor: '#94A6AE',
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

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {recording ? (
            <TouchableOpacity>
              <Image
                source={require('../assets/images/record.gif')}
                style={{
                  height: hp(8),
                  width: hp(8),
                  resizeMode: 'contain',
                }}></Image>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image
                source={require('../assets/images/micro.png')}
                style={{
                  height: hp(8),
                  width: hp(8),
                  resizeMode: 'contain',
                }}></Image>
            </TouchableOpacity>
          )}

          {messages.length > 0 && (
            <TouchableOpacity
              onPress={() => {
                clear();
              }}
              style={{
                backgroundColor: '#858585',
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 100,
                position: 'absolute',
                right: 30,
              }}>
              <Text style={{color: 'white'}}>Clear</Text>
            </TouchableOpacity>
          )}

          {speaking && (
            <TouchableOpacity
              onPress={() => {
                stop();
              }}
              style={{
                backgroundColor: '#DE7474',
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 100,
                position: 'absolute',
                left: 30,
              }}>
              <Text style={{color: 'white'}}>Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
