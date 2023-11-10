import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import { View } from "react-native";
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';

const ViewData = () => {
  const {
    entities: UserDetails
  } = useSelector(state => state.UserDetails);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch('https://your-database-url.com/api/cities').then(response => response.json()).then(data => setCities(data)).catch(error => console.error(error));
  }, []);
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {cities.map((city, index) => <Text key={index} style={styles.text}>
            {city.name}
          </Text>)}
      <FlatList style={styles.UiZXTRlF} renderItem={({
        item
      }) => <View style={styles.lKFvjqAi}></View>} ItemSeparatorComponent={() => <View style={styles.CYZCLJgf} />} data={UserDetails} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  contentContainer: {
    backgroundColor: '#f0f0f1',
    padding: 10
  },
  text: {
    fontSize: 16,
    color: '#333'
  },
  UiZXTRlF: {
    position: "absolute",
    width: 275,
    height: 274,
    left: 42,
    top: 38
  },
  lKFvjqAi: {
    position: "absolute",
    top: 0
  },
  CYZCLJgf: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default ViewData;