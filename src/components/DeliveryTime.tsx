import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function DeliveryTime({handleBottomSheet}:any) {
 
  return (
    <View style={styles.delivery}>
      <View>
        <TouchableOpacity onPress={()=>handleBottomSheet()}>
          <Text style={styles.deliveryTime}>Delivery in 11 Minutes</Text>
          <Text style={styles.deliveryAddress} numberOfLines={1}>
            Room no-24,lane no-2,Sector 46,Gurgaon,HR
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.profile}>V</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  delivery: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  deliveryTime: {
    fontSize: 18,
    marginBottom: 6,
    fontWeight: 'bold',
    color: 'black',
    cursor: 'pointer',
  },
  deliveryAddress: {
    width: 254,
    fontSize: 13,
    fontWeight: '400',
    color: 'black',
  },
  profile: {
    fontSize: 20,
    fontWeight: '900',
    marginRight: 10,
  },
});
