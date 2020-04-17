import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BarcodeGenerator from './pages/BarcodeGenerator';
import Room from './pages/Room';

const ScreenStack = createStackNavigator();

class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        <ScreenStack.Navigator
          initialRouteName="Room"
          screenOptions={{headerShown: false}}>
          <ScreenStack.Screen name="Room" component={Room} />
          <ScreenStack.Screen
            name="BarcodeGenerator"
            component={BarcodeGenerator}
          />
        </ScreenStack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Routes;
