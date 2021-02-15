import React from 'react';
import { AppRegistry } from 'react-native';
import Navigation from './navigation/Navigation';
import { name as appName } from './app.json';

export default function App() {
  return (
    <Navigation/>   
  );
}

AppRegistry.registerComponent(appName, () => App)