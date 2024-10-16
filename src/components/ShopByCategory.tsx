import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ItemCard from './ItemCard';

export const DATA = [
  {
    id: '1',
    title: 'Vegetables & Fruits',
  },
  {
    id: '2',
    title: 'Dairy & Breakfast',
  },
  {
    id: '3',
    title: 'Baskery & Biscuits',
  },
  {
    id: '4',
    title: 'Cold Drinks & Juices',
  },
];

export default function ShopByCategory() {
  return (
    <View>
      <Text
        style={{
          padding: 12,
          fontSize: 17,
          fontWeight: 'bold',
          color: '#1F1F1F',
        }}>
        Shop by category
      </Text>

      {Array(3)
        .fill(null)
        .map((_, i) => (
          <FlatList
            key={i}
            numColumns={4}
            data={DATA}
            renderItem={({item}) => (
              <ItemCard
                title={item.title}
                width={85}
                containerHeight={140}
                height={90}
              />
            )}
          />
        ))}
    </View>
  );
}
