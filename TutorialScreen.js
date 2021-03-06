import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

export class TutorialScreen extends React.Component {

    static navigationOptions = {
      title: 'Tutorial',
      headerStyle: {
        backgroundColor: 'rgba(0, 255, 230, 1)',
      },
    };

    render() {
      return (
        <View style={{ flex: 1, }}>
          <Swiper showsButtons={true}>
          <View >
            <Text style={{textAlign:"center", paddingTop:40, fontWeight:"bold", fontSize:30}} >{this.props.navigation.state.params.title}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center' }}>
            <View style={{paddingTop:10}}>
              <Image style={{ width: 300, height: 300}} source={{uri: JSON.parse(this.props.navigation.state.params.steps).oneImg }} resizeMode="contain"/>
            </View>
            <Text >{JSON.parse(this.props.navigation.state.params.steps).one}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center' }}>
            <View style={{paddingTop:10}}>
              <Image style={{ width: 300, height: 300}} source={{uri: JSON.parse(this.props.navigation.state.params.steps).twoImg }} resizeMode="contain"/>
            </View>
            <Text >{JSON.parse(this.props.navigation.state.params.steps).two}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center' }}>
            <View style={{paddingTop:10}}>
              <Image style={{ width: 300, height: 300}} source={{uri: JSON.parse(this.props.navigation.state.params.steps).threeImg }} resizeMode="contain"/>
            </View>
            <Text >{JSON.parse(this.props.navigation.state.params.steps).three}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center' }}>
            <View style={{paddingTop:10}}>
              <Image style={{ width: 300, height: 300}} source={{uri: JSON.parse(this.props.navigation.state.params.steps).fourImg }} resizeMode="contain"/>
            </View>
            <Text >{JSON.parse(this.props.navigation.state.params.steps).four}</Text>
          </View>
          </Swiper>
        </View>
        
      );
    }
  }