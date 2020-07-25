import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import AddScreen from './AddScreen';
import WelcomeScreen from './WelcomeScreen';

const Stack = createStackNavigator();

class StackNavigator extends Component{
    render(){
        return(
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#216ad7',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            <Stack.Screen name="Home" component={WelcomeScreen} options={{title:"TO DO"}}/>
            <Stack.Screen name="Add" component={AddScreen} />
          </Stack.Navigator> 
        )
      }
    }

export default StackNavigator