import React from 'react';

import Home from "./app/components/Home";

import Cart from "./app/cart/components/Cart";

import { StyleSheet, Text, View } from 'react-native';

import FeatureStackNavigator from "./app/native/Native";

import {StackNavigator, TabNavigator} from "react-navigation";


let Navigator = StackNavigator({
  Home: {
    screen: Home
  },

  Cart: {
    screen: Cart
  }
}, {
  initialRouteName: 'Home'
});


const AppTabNavigator = TabNavigator({
  Home: {
    screen: Navigator
  },
  Cart : {
    screen: Cart
  },
  Native: {
    screen: FeatureStackNavigator
  }
})
 
export default class App extends React.Component {
  render() {
    return (
      <AppTabNavigator>
      </AppTabNavigator>

      // <View style={styles.container}>
         

      //   <Cart >
        
      //   </Cart>

      //  <Text>Product App 5</Text>
 


      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 45
   // alignItems: 'center',
   // justifyContent: 'center',
  },
});
