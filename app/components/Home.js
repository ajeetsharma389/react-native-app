import React from "react";

import {View, Text, Button} from "react-native";

import Config from 'react-native-config'

export default class Home extends React.Component {

    //todo:
    //set title navigation

    static navigationOptions = {
        title: 'Home'
    }

    openCart() {
        //open cart page
        let navigation = this.props.navigation;
        navigation.navigate('Cart', {coupon: 30});
        console.log("Config ", Config);
        console.log("Config end", Config.API_END_POINT);
        console.log("Config api", Config.API_URL);
        alert(Config.API_END_POINT);
        alert(Config.API_URL);
    }

    render() {
        return (
            <View>
                <Text>Home</Text>
                <Button onPress={()=> this.openCart()}
                        title="Cart">
                </Button>
            </View>
        )
    }

}