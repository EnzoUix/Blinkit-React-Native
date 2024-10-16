/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image } from 'react-native'
import React from 'react'


const ItemCard = ({
    title,
    width,
    containerHeight,
    height,
    isBanner = false,
  }: {
    title: string;
    width: number;
    containerHeight: number;
    height: number;
    isBanner?: boolean;
  }) => (
    <View style={{marginHorizontal: 8, width: width, height: containerHeight}}>
      <Image
        style={{
          width: width,
          height: height,
          backgroundColor: '#66666630',
          borderRadius: 10,
          marginTop: 4,
        }}
        source={
          isBanner
            ? require('../assets/images/fashionCard.png')
            : require('../assets/images/potatoChips.jpg')
          // {uri: 'https://reactnative.dev/img/tiny_logo.png'}
        }
      />
      <Text
        style={{
          color: '#1F1F1F',
          fontSize: 13,
          fontWeight: 600,
          marginVertical: 3,
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </View>
  );

  export default ItemCard