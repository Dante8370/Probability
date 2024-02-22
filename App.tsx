import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import arranjoScreen from './assets/src/ArrajoScreen/ArranjoScreen'; 
import CombinationScreen from './assets/src/Combinação/CombinationScreen';
import HomeScreen from './assets/src/Home/HomeScreen';


type RootStackParamList = {
  Home: undefined;
  Arranjos: undefined;
  Combination: undefined;
};


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Arranjos' component={arranjoScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Combination' component={CombinationScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

