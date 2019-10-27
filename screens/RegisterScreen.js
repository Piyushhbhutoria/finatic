/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import LogoTitle from '../components/LogoTitle';
import Touchable from 'react-native-platform-touchable';
import Styles from './../assets/Styles';

class RegisterScreen extends React.Component {
    static navigationOptions = {
        headerTitle: () => <LogoTitle title='Register'/>,
    };
    state = {
        name: '',
        email: '',
        password: '',
        phone: '',
        errorMessage: null,
    };

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => firebase.auth().currentUser.updateProfile({
                displayName: this.state.name,
            }))
            .then(() => firebase.auth().currentUser.updatePhoneNumber(this.state.phone))
            .then((res) => this.props.navigation.navigate('Home'))
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
                    placeholder="Full name"
                    autoCapitalize="words"
                    style={Styles.textInput}
                    onChangeText={name => this.setState({name})}
                    value={this.state.name}
                    autoCompleteType="name"
                />
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={Styles.textInput}
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                    autoCompleteType="email"
                    keyboardType={'email-address'}
                />
                <TextInput
                    placeholder="Phone no."
                    style={Styles.textInput}
                    onChangeText={phone => this.setState({phone})}
                    value={this.state.phone}
                    autoCompleteType="tel"
                    keyboardType="phone-pad"
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={Styles.textInput}
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                    autoCompleteType="password"
                />
                <Touchable
                    onPress={this.handleSignUp}
                    style={Styles.button}
                    background={Touchable.Ripple('blue')}>
                    <Text style={Styles.buttonText}>Sign Up</Text>
                </Touchable>
                <Touchable
                    onPress={() => this.props.navigation.navigate('Login')}
                    style={Styles.button}
                    background={Touchable.Ripple('blue')}>
                    <Text style={Styles.buttonText}>Already have an account? Login</Text>
                </Touchable>
            </KeyboardAvoidingView>
        );
    }
}

export default RegisterScreen;
