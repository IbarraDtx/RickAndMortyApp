import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const ComparisonScreen = () => {
  const [character1, setCharacter1] = useState(null);
  const [character2, setCharacter2] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomCharacters = async () => {
      try {
        const totalCharacters = 826; 
        const randomId1 = Math.floor(Math.random() * totalCharacters) + 1;
        const randomId2 = Math.floor(Math.random() * totalCharacters) + 1;

        const response1 = await axios.get(`https://rickandmortyapi.com/api/character/${randomId1}`);
        const response2 = await axios.get(`https://rickandmortyapi.com/api/character/${randomId2}`);

        setCharacter1(response1.data);
        setCharacter2(response2.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchRandomCharacters();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  return (
    <View style={styles.container}>
      {character1 && character2 ? (
        <View style={styles.comparisonContainer}>
          <View style={styles.characterContainer}>
            <Image source={{ uri: character1.image }} style={styles.image} />
            <Text style={styles.name}>{character1.name}</Text>
            <Text>Estatus: {character1.status}</Text>
            <Text>Especie: {character1.species}</Text>
            <Text>Genero: {character1.gender}</Text>
          </View>
          <View style={styles.vsContainer}>
            <Text style={styles.vsText}>VS</Text>
          </View>
          <View style={styles.characterContainer}>
            <Image source={{ uri: character2.image }} style={styles.image} />
            <Text style={styles.name}>{character2.name}</Text>
            <Text>Estatus: {character2.status}</Text>
            <Text>Especie: {character2.species}</Text>
            <Text>Genero: {character2.gender}</Text>
          </View>
        </View>
      ) : (
        <Text>No hay personajes disponibles para la comparación.</Text>
      )}
      <Button title="Comparar nuevamente" onPress={() => setLoading(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  comparisonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  characterContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  vsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  vsText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ComparisonScreen;