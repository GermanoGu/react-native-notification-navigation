import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Bebidas from '../Screens/Bebidas';
import  Bolos from '../Screens/Bolos';
import Refeicao from '../Screens/Refeicao';
import Sobremesas from '../Screens/Sobremesas';
import Home from '../Screens/Home';

// This is the navigation for Home Screen
const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Bolos" component={Bolos} />
      <Stack.Screen name="Bebidas" component={Bebidas} />
      <Stack.Screen name="Ref" component={Refeicao} options={{ title: "Refeições" }} />
      <Stack.Screen name="Sobremesas" component={Sobremesas} />
    </Stack.Navigator>
  );
}