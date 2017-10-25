import React from 'react';

import Home from "./app/components/Home";

import Cart from "./app/cart/containers/Cart";

import { StyleSheet, Text, View } from 'react-native';

 
import {StackNavigator} from "react-navigation";


import {Provider} from "react-redux";
import store from "./app/Store";

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

 
 
export default class App extends React.Component {
  render() {
    return (
     <Provider store={store}> 
       <Navigator>
        </Navigator>
     </Provider>


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
