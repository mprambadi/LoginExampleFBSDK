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
  View
} from 'react-native';

import Kartu from './component/Kartu'
import Timer from './component/Timer'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Card = (props) => {
  return (
  <Text> 
    {props.name}
  </Text>
  );
  
}


export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: 'ini state',
    } 

  }
  
  render() {
    return (
      <View style={styles.container}>

        <Card name={'ini props'}/>

        <Kartu name={'ini props'}/>

        <Card name={this.state.name} />

        <Timer startWith={500}/>
        
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
