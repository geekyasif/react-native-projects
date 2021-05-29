import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about'

const Stack = createStackNavigator();

function App() {
    return (
    //   <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    //   </NavigationContainer>
    );
  }
  
export default App;
