import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useMemo, useRef} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {screenWidth} from '../utils/constants';
import ShopByCategory from '../components/ShopByCategory';

export default function BottomSheetComponent({
  navigation,
  handleBottomSheet,
}: any) {
  const snapPoints = useMemo(() => ['25%', '70%'], []);

  const bottomSheetRef = useRef<BottomSheet>(null);

  bottomSheetRef.current?.expand();
  const handleClosePress = () => {
    bottomSheetRef.current?.close();
    handleBottomSheet();
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backgroundStyle={{backgroundColor: '#f4f6fd'}}>
      <BottomSheetView style={styles.contentContainer}>
        <View
          style={{
            height: 30,
            width: 30,
            backgroundColor: '#1F1F1F90',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
          }}>
          <Text onPress={handleClosePress} style={styles.closeButton}>
            X
          </Text>
        </View>
        <Text style={styles.headerText}>Select your Location</Text>
        <View style={{flex: 1, height: 60}}>
          <View style={styles.searchContainer}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              autoFocus={true}
              style={styles.searchBar}
              placeholder="Search delivery location"
            />
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  searchContainer: {
    position: 'relative',
    marginHorizontal: 10,
    marginBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    width: screenWidth - 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.6,
    borderColor: '#66666660',
    elevation: 8,
  },
  searchIcon: {
    marginRight: 2,
  },
  searchBar: {
    height: 50,
    fontSize: 13,
    fontWeight: '400',
    padding: 10,
  },
  closeButton: {
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
  },
  headerText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1C1C1C',
    padding: 12,
    width: screenWidth,
  },
});
