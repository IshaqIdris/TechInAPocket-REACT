import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import {HomeScreen} from './HomeScreen';
import {CategoriesScreen} from './CategoriesScreen';
import {EmergencyScreen} from './EmergencyScreen';
import {TutorialScreen} from './TutorialScreen';
import {CategoryScreen} from './CategoryScreen';
import {LoginScreen} from './LoginScreen';
import {SignUpScreen} from './SignUpScreen';
import {CongratsScreen} from './CongratsScreen';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Tutorial: TutorialScreen,
});

const CategoriesStack = createStackNavigator({
  Categories: CategoriesScreen,
  Category: CategoryScreen,
  Tutorial: TutorialScreen
});

const EmergencyStack = createStackNavigator({
  Emergency: EmergencyScreen
});

const LoginStack = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
  Congrats: CongratsScreen
})

export default createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel:"Home Page",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={30} color="#640cf2" />
      )
    },
  },
  Categories: {
    screen:CategoriesStack,
    navigationOptions: {
      tabBarLabel:"Categories",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="bars" size={30} color="#640cf2" />
      )
    },
  },
  Login: {
    screen:LoginStack,
    navigationOptions: {
      tabBarLabel:"Register",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="clipboard" size={30} color="#640cf2" />
      )
    },
  },
  Emergency: {
    screen: EmergencyStack,
    navigationOptions: {
      tabBarLabel:"Categories",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="phone" size={30} color="#640cf2" />
      )
    },
  },
});