import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, 
  AppState, Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  picker: {
    width: 100,
  },
});

export default class Push extends Component {
  static navigationOptions = {
    title: 'Notification'    
 }

  constructor(props) {
    super(props);

    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.state = {
      seconds: 5,
    };
  }

  //TODO: specific routing on notification
  //TODO: handling resources dynamically
  //TODO: BARCODE []
  //TODO: Network connection on or off
  //TODO: webview
  //TODO: SQLite
  //DEbugging VS [PPT]

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === 'background') {
      let date = new Date(Date.now() + (this.state.seconds * 1000));


      let offer = Math.ceil(Math.random() * 100);

      PushNotification.localNotificationSchedule({
        message: "Notification, we have got offers " + offer,
        date,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Choose your notification time in seconds.
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.seconds}
          onValueChange={(seconds) => this.setState({ seconds })}
        >
          <Picker.Item label="5" value={5} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="15" value={15} />
        </Picker>
      </View>
    );
  }
}