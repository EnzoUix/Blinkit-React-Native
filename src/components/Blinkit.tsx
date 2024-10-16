/* eslint-disable react-native/no-inline-styles */
import BottomSheet, {BottomSheetModalProvider, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Animated,
  Button,
  Dimensions,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BestSellerItemCard from './BestSellerItemCard';
import ItemCard from './ItemCard';

const DATA = [
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


const Blinkit = ({navigation,component}:{navigation:any,component:string}) => {
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const screenWidth = Dimensions.get('screen').width;

  useEffect(() => {
      const cyclePlaceholders = setInterval(() => {
        // Fade out animation
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          // Change placeholder text after fade out
          setPlaceholderIndex(
            prevIndex => (prevIndex + 1) % placeholders.length,
          );

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

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);
  const handleOpenPress = () => bottomSheetRef.current?.expand();

  const handleModal = () => {
    return (
      <GestureHandlerRootView>
        <BottomSheetModalProvider>

        {/* <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}> */}
        <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
          <BottomSheetView style={{flex: 1, alignItems: 'center'}}>
            <Text style={{color: 'black'}}>Awesome Bottom Sheet 🎉</Text>
          </BottomSheetView>
        </BottomSheet>
        </BottomSheetModalProvider>
        {/* </View> */}
      </GestureHandlerRootView>
    );
    // return (
    //   <Modal
    //     visible={isModalOpen}
    //     onRequestClose={() => setIsModalOpen(false)}
    //     animationType="slide">
    //     <View style={{width: screenWidth, height: 200}}>
    //       <Button
    //         title="Close"
    //         color="red"
    //         onPress={() => setIsModalOpen(false)}
    //       />
    //       <Text
    //         style={{
    //           fontSize: 18,
    //           fontWeight: 'bold',
    //           padding: 12,
    //           color: '#1C1C1C',
    //         }}>
    //         Select Your Location
    //       </Text>
    //       <View
    //         style={styles.searchContainer}>
    //         <Text style={styles.searchIcon}>🔍</Text>
    //         <TextInput style={styles.searchBar} placeholder='Search Delivery Location'/>
    //       </View>
    //       <View
    //         style={[styles.searchContainer,{backgroundColor:'white'}]}>
    //         <Text style={styles.searchIcon}>📍</Text>
    //         <TextInput style={[styles.searchBar,{color:'#267E3E',fontSize:13,fontWeight:'bold'}]} value='use current location'/>
    //       </View>
    //     </View>
    //   </Modal>
    // );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.ad}>
        <Text style={styles.text}>Blinkit App</Text>
        <TouchableOpacity>
          <View
            style={{
              height: 30,
              width: 120,
              backgroundColor: 'black',
              paddingLeft: 6,
              paddingTop: 6,
              borderRadius: 6,
            }}>
            <Text style={styles.text}>Get The App Now</Text>
          </View>
        </TouchableOpacity>
      </View> */}
      <View style={styles.delivery}>
        <View>
          <TouchableOpacity onPress={handleOpenPress}>
            <Text style={styles.deliveryTime}>Delivery in 11 Minutes</Text>
            <Text style={styles.deliveryAddress} numberOfLines={1}>
              Room no-24,lane no-2,Sector 46,Gurgaon,HR
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.profile}>V</Text>
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <Animated.View style={{opacity: fadeAnim}}>
          <TextInput
          onPress={()=>navigation.navigate("search")}
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
       contentContainerStyle={{flex:1}}
       showsHorizontalScrollIndicator={false}
       horizontal
       data={Array(5).fill(1)}
       renderItem={() => <BestSellerItemCard />}
       keyExtractor={(_, index) => index.toString()}
       />

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
      {handleModal()}
    </SafeAreaView>
  );
};

export default Blinkit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ad: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 58,
    backgroundColor: '#318616',
    padding: 20,
  },
  text: {
    color: 'white',
    fontWeight: '500',
  },
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
  item: {
    width: 131,
    height: 248,
    marginHorizontal: 12,
    marginBottom: 12,
  },
});
