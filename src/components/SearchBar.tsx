import {View, Text, Animated, TextInput, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';
import { screenWidth} from '../utils/constants';

export default function SearchBar({navigation}:any) {
    const placeholders = [
      'search "paneer"',
      'search "curd"',
      'search "chocolate"',
      'search "rice"',
      'search "chips"',
      'search "eggs"',
      'search "milk"',
      'search "butter"',
    ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    const cyclePlaceholders = setInterval(() => {
      // Fade out animation
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        // Change placeholder text after fade out
        setPlaceholderIndex(prevIndex => (prevIndex + 1) % placeholders.length);

        // Fade in animation
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 2000);

    return () => clearInterval(cyclePlaceholders);
  }, [fadeAnim, placeholders.length]);
  return (
    <View>
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <Animated.View style={{opacity: fadeAnim}}>
          <TextInput
            onPress={() => navigation.navigate('search')}
            style={styles.searchBar}
            placeholder={placeholders[placeholderIndex]}
          />
        </Animated.View>
      </View>

      <View style={styles.imageCard}>
        <FastImage
          style={{
            height: 142,
            width: screenWidth - 24,
            backgroundColor: '#66666630',
            borderRadius: 10,
          }}
          resizeMode={FastImage.resizeMode.cover}
          source={
            require('../assets/images/blinkitBanner.webp')
            //   {
            //   priority: FastImage.priority.normal,
            //   uri: 'https://plus.unsplash.com/premium_photo-1661698763470-55da05629e50?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBzaXplfGVufDB8fDB8fHww',
            // }
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    position: 'relative',
    marginHorizontal: 10,
    marginBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: '#66666610',
    borderRadius: 10,
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#66666640',
  },
  searchIcon: {
    marginRight: 2,
  },
  searchBar: {
    height: 50,
  },
  imageCard: {
    padding: 10,
  },
});
