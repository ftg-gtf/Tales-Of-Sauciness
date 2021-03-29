
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadScreen from './Screens/ReadScreen';
import WriteScreen from './Screens/WriteScreen';

export default class App extends React.Component{
  render(){
    return <AppContainer/>
  }
}

const tabNavigator = createBottomTabNavigator({
  WriteScreen: {screen: WriteScreen},
  ReadScreen: {screen: ReadScreen}
});

const AppContainer = createAppContainer(tabNavigator);