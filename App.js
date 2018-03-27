/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView
} from 'react-native';

import axios from 'axios'

import Kartu from './component/Kartu'
import LoginFB from './component/LoginFB'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



class Bola extends Component {
  constructor(props){
    super(props)

    this.state= {
      bola: this.props.bola,
      body: undefined,
    }
  }

  rubahBola(){
    const data = {
      nama: this.state.nama,
    }
    this.setState({bola:'Ikan'})
  }

  componentWillMount(){
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response)=>{
        // console.log("===============", response.data)
        this.setState({
          body: response.data
        }) 
        
      })
  }
  render(){
    if(typeof this.state.body === 'undefined'){
      return(
        <ActivityIndicator size="large" color="#0000ff"/>
      )
    } else {
      console.log('========= ini ok', )

    }
    
    return(
      <ScrollView> 
        <Text> ini state bola {this.state.bola}  </Text>
        <Text> ini props bola {this.props.bola}  </Text>
         {this.state.body.map((respone)=>{
           return (
             <Text key={respone.id}>{respone.body}</Text>
           ) 
        })} 

        <TouchableOpacity onPress={()=>this.rubahBola()}> 
          <Text> Rubah bola </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      nama: 'Joni'
    }
    
  }

  rubah(){
    this.setState({nama:"Budi"})
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text> Say hi ! {this.state.nama} </Text>

        {/* <TouchableOpacity onPress={()=>this.rubah()}> 
          <View>
            <Text> Rubah </Text>
          </View>
        </TouchableOpacity> */}
        
        <LoginFB /> 
        {/* <Kartu name={'Remi'}/> */}
        {/* <Bola bola={'Bola'}/> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
