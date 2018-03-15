import React, {Component} from 'react'
import {Text, View} from 'react-native'


class Timer extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentValue: this.props.startWith
        }
        
        setInterval(()=>{
            this.setState({
                currentValue:this.state.currentValue -1
            })
        }, 1000)

    }

    render(){



        return(
            <View>
                <Text>
                {this.state.currentValue}
                </Text>
                
            </View>
        );
    }
}

export default Timer