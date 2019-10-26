/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';

class RegisterScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Register Screen</Text>
            </View>
        );
    }
}

RegisterScreen.navigationOptions = {
    header: null,
}

export default RegisterScreen;
