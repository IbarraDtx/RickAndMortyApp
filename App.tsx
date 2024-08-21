import 'react-native-gesture-handler';  // Import necesario para react-native-gesture-handler
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import GalleryScreen from './src/screens/GalleryScreen';
import ComparisonScreen from './src/screens/ComparisonScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Galeria" component={GalleryScreen} />
        <Stack.Screen name="Comparacion" component={ComparisonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;