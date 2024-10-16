/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ItemCard from './ItemCard';
import { DATA } from '../utils/constants';


export default function NewArrivals() {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 6,
        paddingTop: 16,
        paddingBottom: 10,
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 800,
          color: '#1F1F1F',
          marginLeft: 10,
          marginBottom: 6,
        }}>
        Have you tried these yet?
      </Text>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={DATA}
        renderItem={({item}) => (
          <ItemCard
            title={item.title}
            containerHeight={140}
            height={104}
            width={180}
            isBanner={true}
          />
        )}
      />
    </View>
  );
}
