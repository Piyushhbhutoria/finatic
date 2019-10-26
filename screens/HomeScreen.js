/* eslint-disable prettier/prettier */
import { firebase } from '@react-native-firebase/auth'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

class HomeScreen extends React.Component {
    state = { currentUser: null }

    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }

    handleLogout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => this.props.navigation.navigate('Login'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
        const { currentUser } = this.state
        return (
            <View style={styles.container}>
                <Text>Hi {currentUser && currentUser.displayName}!</Text>
                <Button title={'logout'} onPress={this.handleLogout} />
            </View>
        )
    }
}

HomeScreen.navigationOptions = {
    header: null,
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
