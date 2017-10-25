import React, {Component} from "react";

import {View, Text, Button, Alert} from "react-native";

import SQLite from "../db/SQLite";

export default class SqliteAccess extends Component {
    static navigationOptions = {
        title: 'SQLite'    
    }

    constructor(props) {
        super(props);

        this.state = {
           
        }
    }

    componentDidMount() {
        
    }

    open () {
        SQLite.open()
        .then ( () => {
            Alert.alert("Open Database success");
        })
        .catch( () => {
            Alert.alert("Could not open db");
        })
    }

    render() {
        return (
            <View>
                 
 

                <Button onPress={()=> this.open()} 
                        title="Open DB">
                </Button>
            </View>
        )
    }
}