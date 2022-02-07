import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

  let count=0;
  const image = { uri: "https://reactjs.org/logo-og.png" };
  
  export default class App extends Component{
 
    constructor(){
   
        super();
   
        this.state = {
   
            TextHolder:count
        }
   
    }
   
    Increment =()=> {
    
      this.setState({
          
          TextHolder: count++
   
        })
    }

    Decrement =()=> {
   
      this.setState({
 
        TextHolder: count--
 
      })
  }
   
     render(){
        return(
        <><View style={styles.Container}>
          <Text Style={{fontSize: 42,
            lineHeight: 84,
            fontWeight: "bold",
            textAlign: "center",}}>Counter App</Text>
            <Text style={{ marginBottom: 20, fontSize: 20 }}> {this.state.TextHolder} </Text>

            <Button title="        +         " onPress={this.Increment} />
            <Text>   </Text>
            <Button title="        -          " onPress={this.Decrement} />
          </View><View>
              <Text style={{ backgroundColor: '#FFA500',textAlign: 'center' }}>Designed by Arvinth Ram M</Text>
            </View></>
        );
    }
  }
     
   
  const styles = StyleSheet.create(
  {
   
  Container:
  {
     justifyContent: 'center',
     alignItems: 'center',
     flex:1,
     backgroundColor: '#FFA500'
  }
  // image: {
  //   flex: 1,
  //   justifyContent: "center"
  // }
   
  });