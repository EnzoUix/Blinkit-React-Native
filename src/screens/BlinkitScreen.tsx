import {FlatList, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import Blinkit from '../components/Blinkit';
import DeliveryTime from '../components/DeliveryTime';
import SearchBar from '../components/SearchBar';
import BestSellers from '../components/BestSellers';
import ShopByCategory from '../components/ShopByCategory';
import ShopByStore from '../components/ShopByStore';
import NewArrivals from '../components/NewArrivals';
import HomeEssentials from '../components/HomeEssentials';

const Data =[
  {
    title:'Delivery time',
    Component:DeliveryTime,
  },
  {
    title:'Banner',
    Component:SearchBar,
  },
  {
    title:'BestSellers',
    Component:BestSellers,
  },
  {
    title:'Shop by category',
    Component:ShopByCategory,
  },
  {
    title:'Shop by store',
    Component:ShopByStore,
  },
  {
    title:'New arrivals',
    Component:NewArrivals,
  },
  {
    title:'Home essentials',
    Component:HomeEssentials,
  },
]

export default function BlinkitScreen({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <FlatList
        data={Data}
        renderItem={({item}) => <item.Component navigation={navigation} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
