import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AuthLoadingScreen from './authloadingscreen';
import HomeScreen from './App';
import SignInScreen from './signin';

const AppStack = createStackNavigator({
  Home: HomeScreen,
});
const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);