/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import Color from './../constants/Color';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin:'5%',
    },
    errorText: {
        color: Color.warning,
        fontSize: 16,
        marginVertical: 10,
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: Color.grey,
        borderBottomWidth: 1,
        marginVertical: 10,
        padding: 5,
        fontSize: 16,
    },
    button: {
        marginVertical: 10,
        // borderColor: 'black',
        // borderWidth: 1,
        padding: 3,
    },
    buttonText: {
        fontSize: 16,
        padding: 3,
        color: Color.themeColor,
    },
});

export default Styles;
