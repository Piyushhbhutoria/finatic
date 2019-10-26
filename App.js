/* eslint-disable prettier/prettier */
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import LoadingScreem from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';



const AppNavigator = createStackNavigator(
  {
    Loading: LoadingScreem,
    Register: RegisterScreen,
    Login: LoginScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Loading',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App(porps) {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppContainer />
    </View>
  );;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
