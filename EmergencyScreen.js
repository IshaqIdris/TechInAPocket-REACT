import React from 'react';
import { Text, View } from 'react-native';
// import call from 'react-native-phone-call'

// const args = {
//   number: '9093900003', // String value with the number to call
//   prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
// }

// call(args).catch(console.error)

export class EmergencyScreen extends React.Component {

  static navigationOptions = {
    headerTitle: 'Emergency',
    headerStyle: {
      backgroundColor: 'rgba(166, 102, 255, 1)',
    },
  };

    render() {
      return (
        <View style={{ flex: 1}}>
          <Text style={{alignSelf: "center", paddingTop: "20%"}}>Emergency!</Text>
          <Text style={{alignSelf: "center", paddingLeft:"5%", paddingRight:"5%"}}>Usually this will bring up the dialer and directly call a designated number to a support staff. However due to the use of a simulator I commented the code for this in the "EmergencyScreen.js" file due to it throwing an error. If testing outside the simulator you can uncomment this code to utilise this funcitonality.</Text>
        </View>
      );
    }
  }