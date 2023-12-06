import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Src/Pages/ImageGridPage';
import DetailScreen from './Src/Pages/ImageGridDetailspage'
const Stack = createNativeStackNavigator();
function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeScreen">
      <Stack.Screen name='HomeScreen' component={HomeScreen}  /> 
      <Stack.Screen name='DetailScreen' component={DetailScreen}  /> 
    </Stack.Navigator>
  );
}

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}