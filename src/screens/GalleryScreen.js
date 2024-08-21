import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const GalleryScreen = ({ route }) => {
  const { numberOfCharacters } = route.params;
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        const randomCharacters = response.data.results.sort(() => 0.5 - Math.random()).slice(0, numberOfCharacters);
        setCharacters(randomCharacters);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text>Estatus: {item.status}</Text>
          <Text>Especie: {item.species}</Text>
          <Text>Genero: {item.gender}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default GalleryScreen;