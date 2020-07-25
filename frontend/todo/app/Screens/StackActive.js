import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ActiveScreen from './ActiveScreen';

const Stack = createStackNavigator();

class StackActive extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#216ad7',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            <Stack.Screen name="Active" component={ActiveScreen} options={{title:"Active"}}/>
        </Stack.Navigator>
    );
  }
}

export default StackActive;
