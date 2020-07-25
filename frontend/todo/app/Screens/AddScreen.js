import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from '@react-navigation/native';

class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.textStyle}>Note</Text>
          <TextInput placeholder="Note" style={styles.inputStyle}></TextInput>
          
          <Button title="Submit"></Button>
      </View>
    );
  }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        width:"80%",
        left:40,
        
        
        
        alignContent:"center"
    },
    inputStyle:{
        width:"80%",
        borderBottomWidth: 1,
        borderRadius: 25,
        borderColor:"#b226e4"
        
        
    },
    textStyle:{
        fontSize:30
    }

})
export default AddScreen;
