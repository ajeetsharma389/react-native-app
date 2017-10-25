import React, {Component} from 'react'
var Contacts = require('react-native-contacts')

import {
  View,
  Text,
  Button,
  Image,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  ScrollView,
  CameraRoll,
  TouchableHighlight,
  Platform,
  Alert
} from 'react-native'

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        Contacts.getAll( (err, contacts) => {
            this.setState({contacts: contacts})
        });
    }

    render() {

        let list = this.state.contacts.map ( contact => (
            <Text key={contact.recordID}> 
                {contact.givenName}-{contact.familyName}
            </Text>
        ))
        return (
            <View>
                {list}
            </View>
            )
    }
}