import {View, Text} from 'react-native';
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
          <View
            key={i}
            style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            {DATA.map((item, index) => (
              <ItemCard
                key={index}
                title={item.title}
                width={85}
                containerHeight={140}
                height={90}
              />
            ))}
          </View>
        ))}
    </View>
  );
}
