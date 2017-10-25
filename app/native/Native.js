import React, {Component} from "react";

import {View, Button, Text} from "react-native";
import { StackNavigator} from 'react-navigation'
  
 import Inputs from "./Inputs";
  
class NativeFeature extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                


                <Button onPress={()=> this.props.navigation.navigate("Inputs", 
                                                      {title: 'Inputs'})} 
                        title="Input Controls">

                </Button>
  
                
            </View>
        )
    }
}

const FeatureStackNav = StackNavigator({
    Main: {
        screen: NativeFeature,
    },
 

    Inputs: {
        screen: Inputs
    },
 
})

export default FeatureStackNav;