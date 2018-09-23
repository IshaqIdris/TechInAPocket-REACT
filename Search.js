import React from 'react';
import { Text, View, ListView, TouchableHighlight, ImageBackground, StyleSheet } from 'react-native';
import {SearchBar} from 'react-native-elements';


export class Search extends React.Component {
    render() {
        return (
        <View style={{flex:1}} >
            <SearchBar lightTheme  containerStyle={{backgroundColor: 'rgba(125, 26, 255, 0)', borderBottomColor: 'transparent', borderTopColor: 'transparent'}}
   inputStyle={{backgroundColor: 'rgba(126, 208, 118, 1)'}} placeholder='Search Tutorials' placeholderTextColor='rgba(255, 255, 255, 1)' />
        </View>
        );
      }
}