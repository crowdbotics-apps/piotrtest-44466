import { useSelector } from "react-redux";
import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet, View, FlatList, Text } from 'react-native';

const AddCityScreen = () => {
  const {
    entities: Cities
  } = useSelector(state => state.Cities);
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  const addCity = () => {
    setCities([...cities, {
      id: Math.random().toString(),
      value: city
    }]);
    setCity('');
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter City" style={styles.input} onChangeText={setCity} value={city} />
        <Button title="Add City" onPress={addCity} data={Cities} />
      </View>
      <FlatList data={cities} keyExtractor={item => item.id} renderItem={itemData => <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10
  },
  input: {
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
export default AddCityScreen;