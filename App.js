/* eslint-disable prettier/prettier */
import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LogoTitle from './components/LogoTitle';
import Color from './constants/Color'

const config  = {
    defaultNavigationOptions: {
        headerTitle: () => <LogoTitle />,
        headerStyle: {
            backgroundColor: Color.themeColor,
            height: 80,
        },
    },
}

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    config,
)

HomeStack.path =''

const LoginStack = createStackNavigator(
    {
        Login: LoginScreen,
    },
    config,
)

LoginStack.path =''

const RegisterStack = createStackNavigator(
    {
        Register: RegisterScreen,
    },
    config,
)

RegisterStack.path =''

const Loader = createStackNavigator(
    {
        Loader: LoadingScreen,
    },
    config,
)

Loader.path =''



const AppContainer = createAppContainer(createSwitchNavigator({
    Loading: Loader,
    Home: HomeStack,
    Login: LoginStack,
    Register: RegisterStack,
}));

export default function App(props) {
    return (
        <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
            <AppContainer/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
