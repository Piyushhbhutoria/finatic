/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import LogoTitle from '../components/LogoTitle';
import Styles from './../assets/Styles';
import Touchable from 'react-native-platform-touchable';

class LoginScreen extends React.Component {
    static navigationOptions = {
        headerTitle: () => <LogoTitle title='login'/>,
    };
    state = {email: '', password: '', errorMessage: null};

    handleLogin = () => {
        const {email, password} = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Home'))
            .catch(error => this.setState({errorMessage: error.message}));
    };

    render() {
        return (
            <KeyboardAvoidingView style={Styles.container}
                                  behavior={Platform.OS === 'android' ? 'height' : 'padding'}
                                  enabled>
                {this.state.errorMessage &&
                <Text style={Styles.errorText}>
                    {this.state.errorMessage}
                </Text>}
                <TextInput
                    style={Styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                    keyboardType="email-address"
                />
                <TextInput
                    secureTextEntry
                    style={Styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                />
                <Touchable
                    onPress={this.handleLogin}
                    style={Styles.button}
                    background={Touchable.Ripple('blue')}>
                    <Text style={Styles.buttonText}>Login</Text>
                </Touchable>
                <Touchable
                    onPress={() => this.props.navigation.navigate('Register')}
                    style={Styles.button}
                    background={Touchable.Ripple('blue')}>
                    <Text style={Styles.buttonText}>Don't have an account? Sign Up</Text>
                </Touchable>
            </KeyboardAvoidingView>
        );
    }
}

export default LoginScreen;
