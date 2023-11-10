import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, FlatList } from 'react-native';
const cities = [{
  id: '1',
  name: 'New York'
}, {
  id: '2',
  name: 'Los Angeles'
}, {
  id: '3',
  name: 'Chicago'
}, {
  id: '4',
  name: 'Houston'
}, {
  id: '5',
  name: 'Phoenix'
}];

const CityItem = ({
  name
}) => <View style={styles.itemContainer}>
    <Image style={styles.image} source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} />
    <Text style={styles.name}>{name}</Text>
  </View>;

const CityScreen = () => <SafeAreaView style={styles.container}>
    <FlatList data={cities} keyExtractor={item => item.id} renderItem={({
    item
  }) => <CityItem name={item.name} />} />
  </SafeAreaView>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  name: {
    fontSize: 18
  }
});
export default CityScreen;