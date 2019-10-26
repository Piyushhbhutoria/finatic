/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login Screen</Text>
            </View>
        );
    }
}

LoginScreen.navigationOptions = {
    header: null,
}

export default LoginScreen;
