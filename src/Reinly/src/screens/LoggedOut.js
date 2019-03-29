
import React, {Component} from 'react';
import colors from '../styles/colors';
import {StyleSheet, Text,View, Image} from 'react-native'
import RoundedButton from '../components/buttons/RoundedButton';

export default class LoggedOut extends Component {
    render() {
        return(
            <View style = {styles.wrapper}>
                <View style = {styles.welcomeWrapper}>
                    <Image source = {require('../images/reinly_logo.png')}
                    style = {styles.logo}/>
                    <Text style = {styles.welcomeText}>Welcome to Reinly!</Text>
                    <RoundedButton text = "Continue with Facebook"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.blue,
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 40
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40
    }
});