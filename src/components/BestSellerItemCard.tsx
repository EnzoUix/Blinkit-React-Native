import { View, Text, StyleSheet, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'

 const BestSellerItemCard = () => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={
            require('../assets/images/potatoChips.jpg')
            // uri: 'https://plus.unsplash.com/premium_photo-1661698763470-55da05629e50?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBzaXplfGVufDB8fDB8fHww',
          }
          onError={e => console.error('Image loading error', e.nativeEvent.error)}
        />
        <Text style={styles.timeText}>⏱️ 11 mins</Text>
        <Text style={styles.title}>Potato(0.95 kg - 1.05 kg)</Text>
        <Text style={styles.weight}>0.95 kg - 1.05 kg</Text>
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.newPrice}>Rs44</Text>
            <Text style={styles.oldPrice}>Rs58</Text>
          </View>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => console.log('Add Pressed')}>
            <View style={styles.addButtonContainer}>
              <Text style={styles.addButtonText}>ADD</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  };

  export default BestSellerItemCard

  const styles = StyleSheet.create({
    item: {
      width: 131,
      height: 248,
      marginHorizontal: 12,
      marginBottom: 12,
    },
    image: {
      height: 128,
      width: 128,
      backgroundColor: '#66666630',
      borderColor: '#66666650',
      borderWidth: 0.5,
      borderRadius: 10,
    },
    timeText: {
      fontSize: 10,
      color: '#1F1F1F',
      fontWeight: '900',
      marginVertical: 5,
      backgroundColor: '#66666610',
      width: 60,
      padding: 2,
    },
    title: {fontSize: 14, color: '#1F1F1F', fontWeight: '600'},
    weight: {
      fontSize: 13,
      color: '#1F1F1F',
      fontWeight: '500',
      marginBottom: 8,
    },
    priceContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    newPrice: {fontSize: 13, color: '#1F1F1F', fontWeight: '600'},
    oldPrice: {
      fontSize: 13,
      color: '#828282',
      fontWeight: '400',
      textDecorationLine: 'line-through',
    },
    addButtonContainer: {
      borderColor: '#318616',
      borderRadius: 6,
      borderWidth: 2,
      width: 66,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addButtonText: {color: '#318616'},
  })