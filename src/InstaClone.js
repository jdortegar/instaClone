import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MainFeed, Login, Register, Camera, Profile } from './components/screens';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';

const Tabs = createBottomTabNavigator({
  feed: { screen: MainFeed },
  camera: { screen: Camera },
  profile: { screen: Profile }
});

const IntroStack = createStackNavigator({
  login: Login,
  register: Register
});

const MainStack = createSwitchNavigator({
  login: IntroStack,
  main: Tabs
});

const InstaClone = createAppContainer(MainStack);

export default InstaClone;
