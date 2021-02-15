import React from 'react';
import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Store from '../models/Store';
import { HomeScreen, IncrementScreen, EditScreen, DeviceScreen } from '../screens/Screens';
import { Options } from '../constants/Constants';

const Stack = createStackNavigator()

const Navigation = (props) => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={HomeScreen} options={Options}/>
          <Stack.Screen name='select' component={DeviceScreen} options={Options}/>          
          <Stack.Screen name='add' component={IncrementScreen} options={Options}/>
          <Stack.Screen name='edit' component={EditScreen} options={Options}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default Navigation;
