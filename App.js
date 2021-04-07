import React from 'react';
import {Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import Face from './screens/face';
import Insta from './screens/insta';
import Welcomescreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';
export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    )
  }
}
const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {screen:HomeScreen},
  ExchangeScreen : {screen:ExchangeScreen}
})
const AppNavigator = createSwitchNavigator({
  Welcomescreen:{screen:Welcomescreen},
  BottomTab:{screen:AppTabNavigator},
  Face:{screen:Face}
})
const AppContainer = createAppContainer(AppNavigator);