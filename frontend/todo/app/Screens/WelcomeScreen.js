import React, { Component } from 'react';
import { View, Text, SafeAreaView ,StyleSheet, Button, TouchableOpacity,Image, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios'


class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"" //Data
      
    };
  }
  componentDidMount(){
    axios.get("http://192.168.0.102:3000/")
    .then((response)=>{
      
      this.setState({name:response.data})
      console.log(this.state.name)
    })
    .catch((err)=>{
      console.log("error",err)
    })
  }


  render() {
    return (
      <SafeAreaView  style={styles.container}>
        <FlatList
          data={this.state.name}
          renderItem={({item})=>{
            <View>
              <Text >{item.name}</Text>
            </View>
          }}
          keyExtractor={item => item.id}
        />

        <View style={styles.touch}>
          <TouchableOpacity style={styles.mybutton} onPress={()=>{this.props.navigation.navigate('Add')}}>
            <Image source={require('../../assets/plus-32.png')}/>
          </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    );
  }

  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  mybutton:{
    borderRadius:27,
    height:54,
    width:54,
    backgroundColor:"#216ad7",
    alignItems:"center",
    justifyContent:"center",
    zIndex:999
  },
  touch:{
    flexDirection:"row",
    position:"absolute",
    alignSelf:"flex-end",
    justifyContent:"flex-end",
    top:"83%",
    right:"3%"
    
  }


})
export default WelcomeScreen;