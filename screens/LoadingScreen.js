/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { firebase } from '@react-native-firebase/auth'

class LoadingScreen extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Home' : 'Register')
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}

LoadingScreen.navigationOptions = {
    header: null,
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
