/* eslint-disable react-native/no-inline-styles */
import {View, Image} from 'react-native';
import React from 'react';
import ItemCard from './ItemCard';
import {DATA, screenWidth} from '../utils/constants';

export default function HomeEssentials() {

  return (
    <View>
      <Image
        style={{width: screenWidth, height: 86}}
        source={require('../assets/images/germFreeHome.png')}
      />
      <View
        style={{
          width: screenWidth,
          height: 140,
          backgroundColor: '#DAF2FF',
          paddingVertical: 6,
          paddingHorizontal: 14,
          flex: 1,
          flexDirection:'row',
        }}>
        {DATA.map((item,i)=>(
          <ItemCard
          key={i}
          title={item.title}
          containerHeight={112}
          height={82}
          width={78}
        />
        ))}
      </View>
    </View>
  );
}
