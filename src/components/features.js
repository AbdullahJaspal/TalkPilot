import React from 'react';
import {Image, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Features = () => {
  const Box = ({title, des, img, bg}) => {
    return (
      <View
        style={{
          backgroundColor: bg,
          paddingHorizontal: 12,
          borderRadius: 10,
          paddingVertical: 14,
          borderRadius: 14,
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Image source={img} style={{width: wp(10), height: wp(10)}} />
          <Text
            style={{
              color: 'black',
              fontSize: wp(4.3),
              fontFamily: 'JetBrainsMono-Bold',
              marginLeft: 10,
            }}>
            {title}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'JetBrainsMono-SemiBold',
            fontSize: wp(3.4),
            marginTop: 8,
            color: 'black',
          }}>
          {des}
        </Text>
      </View>
    );
  };

  return (
    <View style={{height: wp(60)}}>
      <Text
        style={{
          fontSize: wp(6.5),
          fontFamily: 'JetBrainsMono-ExtraBold',
          color: 'black',
        }}>
        Features
      </Text>

      <Box
        img={require('../assets/images/chatgpt.png')}
        title="Chatgpt"
        des="ChatGPT is an (AI) chatbot that uses natural language processing to
          create humanlike conversational dialogue. The language model can
          respond to questions and compose various written content."
        bg={'#AEEDCA'}
      />
      <Box
        img={require('../assets/images/dalle.webp')}
        title="DALL-E"
        des="DALL-E, created by OpenAI is a deep learning model which has the ability to create visuals based on textual descriptions. This is achievable with the blend of computer vision and natural language processing."
        bg={'#E1CFFB'}
      />
      <Box
        img={require('../assets/images/smartAi.png')}
        title="Smart Ai"
        des="A powerfull voice chat assistant with abilities of both Chatgpt and DALL-E providing the best of both Chatgpt and DALL-E."
        bg={'#A6E6EF'}
      />
    </View>
  );
};

export default Features;
