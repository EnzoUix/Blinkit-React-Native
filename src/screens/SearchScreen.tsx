import {View, Text, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';

export default function SearchScreen({navigation}: any) {
  const [query, setQuery] = useState('');
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <View style={styles.searchContainer}>
        <Text
          onPress={() => navigation.navigate('blinkit')}
          style={styles.searchIcon}>
          ⬅️
        </Text>
        <TextInput
          autoFocus={true}
          value={query}
          style={styles.searchBar}
          placeholder="Search for aata dal and more"
          onChangeText={e => setQuery(e)}
        />
      </View>
      <View style={{flex:1,flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',padding:12}}>
        <Text style={{fontSize:17,fontWeight:800,color:'#1F1F1F'}}>
            Recent searches
        </Text>
        <Text style={{fontSize:13,fontWeight:600,color:'#318616'}}>clear</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    position: 'relative',
    marginHorizontal: 12,
    marginVertical: 12,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#66666610',
    elevation:8
  },
  searchIcon: {
    marginRight: 2,
  },
  searchBar: {
    height: 50,
    fontWeight: '400',
    fontSize: 14,
    flex:1
  },
});
