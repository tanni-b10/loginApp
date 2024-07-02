import React from 'react';
import Login from  './pages/login';
import ForgotPassword from'./pages/forgotPassword';
import Register from './pages/register';
import Verification from './pages/verification';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/home';

const Stack= createNativeStackNavigator();
const Navigator=()=>{
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
          <Stack.Screen name="Verification" component={Verification}/>
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigator;
