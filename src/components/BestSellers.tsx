import { View, Text, FlatList } from 'react-native'
import React from 'react'
import BestSellerItemCard from './BestSellerItemCard'

export default function BestSellers() {
  return (
    <View>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 12,
      }}>
      <Text style={{fontSize: 17, color: '#1F1F1F', fontWeight: 'bold'}}>
        BestSellers
      </Text>
      <Text style={{fontSize: 13, color: '#318616', fontWeight: 'bold'}}>
        see all
      </Text>
    </View>

    <FlatList
      contentContainerStyle={{flex: 1}}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={Array(5).fill(1)}
      renderItem={() => <BestSellerItemCard />}
      keyExtractor={(_, index) => index.toString()}
    />
  </View>
  )
}