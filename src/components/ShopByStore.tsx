import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ItemCard from './ItemCard';
import { DATA } from '../utils/constants';

export default function ShopByStore() {
  return (
    <View>
      <Text
        style={{
          padding: 12,
          fontSize: 17,
          fontWeight: 'bold',
          color: '#1F1F1F',
        }}>
        Shop by store
      </Text>

      <FlatList
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => (
          <ItemCard
            title={item.title}
            containerHeight={140}
            height={90}
            width={85}
          />
        )}
      />
    </View>
  );
}
