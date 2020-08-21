import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Yelp from "../api/Yelp";
const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  useEffect(() => {
    getResult(id);
  }, []);

  const getResult = async (id) => {
    const response = await Yelp.get(`/${id}`);
    setResult(response.data);
    console.log(result);
  };

  console.log(id);

  if (!result) {
    return null;
  }
  return (
    <View>
      <Text style={styles.name}>{result.name}</Text>
      <View>
        <Text style={styles.info}>
          {result.rating} Stars, {result.review_count} Reviews
        </Text>
        <Text style={styles.info}>Contact Info: {result.phone}</Text>
      </View>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#4444",
    borderBottomWidth: 3,
  },
  info: {
    fontSize: 20,
    alignSelf: "center",
  },
  image: {
    alignSelf: "center",
    height: 200,
    width: 300,
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default ResultsShowScreen;
