import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image,ImageBackground,StyleSheet, Text, View } from 'react-native';
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

function LogoTitle({title}) {
  return (
         <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width:'100%', 
          height:'100%'
        }}>
            {/* <Image
              style={{ 
                width: 30, 
                height: 30,
                marginRight: 10,
              }}
              source={require('../assets/favicon.png')}
            /> */}
            <AntDesign 
                name="heart" 
                size={24} 
                style={{ 
                  width: 30, 
                  height: 30,
                  marginTop: 10,
                  marginRight: 10,
              }} 
              color="white" 
            />
            <View>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                
              }}>{title}</Text>
            </View>
      </View>


  );
}


function App() {
    return (
    //   <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
              headerStyle: {
                backgroundColor: "red"
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >

             
          <Stack.Screen 
            name="Movie Review Zone" 
            component={Home}  
            title="Gamezone"
            options={{ headerTitle: () => <LogoTitle title="Movie Review Zone"/>}}
          />
          <Stack.Screen 
            name="Review Details" 
            component={ReviewDetails} 
            options={{ headerTitle: () => <LogoTitle title="Movie Review Detail" /> }}
          />

        </Stack.Navigator>
          
    //   </NavigationContainer>
    );
  }
  
export default App;
