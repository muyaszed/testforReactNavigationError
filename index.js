/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppContainer from './router';

const Main = () => {
  return (
    <AppContainer>
      <App />
    </AppContainer>
  )
}

AppRegistry.registerComponent(appName, () => Main);
