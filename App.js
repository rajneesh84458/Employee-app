
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducers/reducer'
import Home from './components/Home';

import CreateEmployee from './components/createEmployee';
import AppIntro from './components/AppIntro'
import SplashScreen from './components/SplashScreen';

import Login from './components/AuthScreens/Login';
import Register  from './components/AuthScreens/Register';
import Profile from './components/Profile';

const store  = createStore(reducer)
const Stack = createStackNavigator();

const myOptions = {
  title:"Home",
  headerTintColor:"white",
  headerStyle:{
    backgroundColor:"#006aff"
  }
}

export default function App({navigation}) {
 
  return (
    <Provider store={store}>
    <NavigationContainer>
    <View style={styles.container}>
     
      <Stack.Navigator>
      <Stack.Screen 
        name="splash" 
        component={SplashScreen}
        options={{headerShown: false }}
          />
        <Stack.Screen 
        name="slider" 
        component={AppIntro}
        options={{headerShown: false }}
          />


        <Stack.Screen 
        name="Register" 
        component={Register}
        options={{headerShown: false }}
          />
        <Stack.Screen 
        name="Login" 
        component={Login}
        options={{headerShown: false }}
          />
        
        <Stack.Screen 
        name="Home" 
        component={Home}
         options={myOptions} />
        <Stack.Screen 
         name="Create"
         component={CreateEmployee}
         options={{...myOptions,title:"Create Employee"}} 
         />
        <Stack.Screen
         name="Profile"
         component={Profile}
         options={{...myOptions,title:"Profile"}} 
          />
     </Stack.Navigator>
  
    </View>
    </NavigationContainer>
    </Provider>
    
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});




