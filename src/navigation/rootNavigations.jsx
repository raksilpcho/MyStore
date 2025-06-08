import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import CartScreen from '../screens/CartScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CartScreen"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="ItemDetailScreen" component={ItemDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
