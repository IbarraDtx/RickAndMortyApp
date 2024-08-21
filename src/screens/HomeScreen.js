import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [number, setNumber] = useState('');

  const handleNavigateGallery = () => {
    navigation.navigate('Galeria', { numberOfCharacters: parseInt(number) });
  };

  const handleNavigateComparison = () => {
    navigation.navigate('Comparacion');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rick & Morty Extraordinario</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa un numero"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />
      <Button title="Mostrar Galeria" onPress={handleNavigateGallery} />
      <View style={styles.spacer} />
      <Button title="Comparar dos personajes" onPress={handleNavigateComparison} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
  },
  spacer: {
    marginVertical: 20,
  },
});

export default HomeScreen;