import {View, Image, FlatList} from 'react-native';
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
        }}>
        <FlatList
          numColumns={4}
          data={DATA}
          renderItem={({item}) => (
            <ItemCard
              title={item.title}
              containerHeight={112}
              height={82}
              width={78}
            />
          )}
        />
      </View>
    </View>
  );
}
