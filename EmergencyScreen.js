import React from 'react';
import { Text, View } from 'react-native';
import {SearchBar} from 'react-native-elements';

export class EmergencyScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1}}>
          <View >
              <SearchBar lightTheme containerStyle={{marginTop:20}} placeholder='Type Here...' />
          </View>  
          <Text>Emergency!</Text>
        </View>
      );
    }
  }