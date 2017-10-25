import React, {Component} from 'react'
 
import {
  View,
  Text,
  Button,
  Image,
  ActivityIndicator,
     
  Alert
} from 'react-native'

export default class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
           loading: true
        }
    }

    componentDidMount() {
       this.handle =  setInterval( () => {
            this.setState({loading : !this.state.loading})
         }, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.handle);
    }

    render() {
        return (
            <View>
              { this.state.loading &&  <ActivityIndicator /> }
            </View>
            )
    }
}