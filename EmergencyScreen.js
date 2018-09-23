import React from 'react';
import { Text, View } from 'react-native';
import call from 'react-native-phone-call'

const args = {
  number: '9093900003', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}

call(args).catch(console.error)

export class EmergencyScreen extends React.Component {

    render() {
      return (
        <View style={{ flex: 1}}>
          <Text>Emergency!</Text>
        </View>
      );
    }
  }