import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useMemo, useRef} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider, BottomSheetView} from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';

export default function DeliveryTime() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);
  const handleOpenPress = () => bottomSheetRef.current?.expand();

  // const handleModal = () => {
  //   return (
  //     <GestureHandlerRootView>
  //       <BottomSheetModalProvider>
  //         <BottomSheetModal ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
  //         <BottomSheet >
  //           <BottomSheetView style={{flex: 1, alignItems: 'center'}}>
  //             <Text style={{color: 'black'}}>Awesome Bottom Sheet 🎉</Text>
  //           </BottomSheetView>
  //         </BottomSheet>
  //         </BottomSheetModal>
  //       </BottomSheetModalProvider>
  //     </GestureHandlerRootView>
  //   );
  //   // return (
  //   //   <Modal
  //   //     visible={isModalOpen}
  //   //     onRequestClose={() => setIsModalOpen(false)}
  //   //     animationType="slide">
  //   //     <View style={{width: screenWidth, height: 200}}>
  //   //       <Button
  //   //         title="Close"
  //   //         color="red"
  //   //         onPress={() => setIsModalOpen(false)}
  //   //       />
  //   //       <Text
  //   //         style={{
  //   //           fontSize: 18,
  //   //           fontWeight: 'bold',
  //   //           padding: 12,
  //   //           color: '#1C1C1C',
  //   //         }}>
  //   //         Select Your Location
  //   //       </Text>
  //   //       <View
  //   //         style={styles.searchContainer}>
  //   //         <Text style={styles.searchIcon}>🔍</Text>
  //   //         <TextInput style={styles.searchBar} placeholder='Search Delivery Location'/>
  //   //       </View>
  //   //       <View
  //   //         style={[styles.searchContainer,{backgroundColor:'white'}]}>
  //   //         <Text style={styles.searchIcon}>📍</Text>
  //   //         <TextInput style={[styles.searchBar,{color:'#267E3E',fontSize:13,fontWeight:'bold'}]} value='use current location'/>
  //   //       </View>
  //   //     </View>
  //   //   </Modal>
  //   // );
  // };

  return (
    <View style={styles.delivery}>
      <View>
        <TouchableOpacity onPress={handleOpenPress}>
          <Text style={styles.deliveryTime}>Delivery in 11 Minutes</Text>
          <Text style={styles.deliveryAddress} numberOfLines={1}>
            Room no-24,lane no-2,Sector 46,Gurgaon,HR
          </Text>
        </TouchableOpacity>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <View style={{}}>
            <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
              <BottomSheetView style={{flex: 1, alignItems: 'center'}}>
                <Text style={{color: 'black'}}>Awesome Bottom Sheet 🎉</Text>
              </BottomSheetView>
            </BottomSheet>
          </View>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
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
