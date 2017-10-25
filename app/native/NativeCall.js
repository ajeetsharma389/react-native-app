import React, {Component} from "react";

import {View, Text, Button, Alert} from "react-native";
 
import { NativeModules } from 'react-native';
var CalendarManager = NativeModules.CalendarManager;

export default class NativeCall extends Component {
   
    static navigationOptions = {
        title: 'Call ObjC'    
    }
   
    constructor(props) {
        super(props);

    }

    componentDidMount() {
      }

    addEvent () {
        let date = new Date(); 
        CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey', date.getTime());
    }


    addEventWithObject () {
        let date = new Date();
        CalendarManager.addEvent2('Birthday Party', {
            location: '4 Privet Drive, Surrey',
            time: date.getTime(),
            description: '...'
          })
    }

    findEventWithCallback() {
        CalendarManager.findEvents((error, events) => {
            if (error) {
                Alert.alert("Error in callback");
              console.error(error);
            } else {
              Alert.alert("got events: " + events.join(","))
            }
          })
    }

    async findEventWithPromise() {
        try {
            var events = await CalendarManager.findEventsWithPromise();
            Alert.alert("got events: " + events.join(","))
          } catch (e) {
            Alert.alert("Error in promise fail");
          }
    }

    async findEventWithPromiseFail() {
        try {
            var events = await CalendarManager.findEventsWithReject();
            Alert.alert("got events: " + events.join(","))
          } catch (e) {
            Alert.alert("Error in promise fail " + e);
          }
    }

    render() {
        return (
            <View>
               
                <Button onPress={()=> this.addEvent()} 
                        title="Call Native">
                </Button>


                <Button onPress={()=> this.addEventWithObject()} 
                        title="Native Call with Obj Type">
                </Button>

                <Button onPress={()=> this.findEventWithCallback()} 
                        title="Callback">
                </Button>

                <Button onPress={()=> this.findEventWithPromise()} 
                        title="Promise Resolve">
                </Button>


                <Button onPress={()=> this.findEventWithPromiseFail()} 
                        title="Promise Fail">
                </Button>

                
                
            </View>
        )
    }
}