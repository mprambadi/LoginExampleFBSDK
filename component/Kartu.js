import React, {Component} from 'react'
import {View, Text, Alert} from 'react-native'

class Kartu extends Component {
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <View>
                <Text> {this.props.name} </Text>
            </View>
        )
    }
}

export default Kartu