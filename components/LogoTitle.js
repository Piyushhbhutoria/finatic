/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

export default function LogoTitle(props) {
    return (
        <View style={styles.container}>
            {/*<Text style={styles.text}>{props.title}</Text>*/}
            <Image
                source={require('./../assets/images/logo.png')}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#f4511e',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#fff',
    },
    image: {
        height:60,
        width: 220,
    }
});
