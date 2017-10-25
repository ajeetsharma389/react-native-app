import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default class FlexBasic extends React.Component {

    render() {
        return (
            <View style={styles.container}>
              <Text style={[styles.boxContainer, styles.box1]}>
                 Box 1
              </Text>

              <Text style={[styles.boxContainer,styles.box2]}>
                 Box 2
              </Text>


              <Text style={[styles.boxContainer,styles.box3]}>
                 Box 32
              </Text>

              

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },

    boxContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       // margin: 20
       //marginTop: 50
        
    },

    box1: {
        backgroundColor: '#FFEEE4',
        flex: 3
    },

    box2: {
        backgroundColor: '#F1EECC',
        flex: 2
    },

    box3: {
        backgroundColor: '#C5FFDD',
        flex: 1
    }
  });
