
import React, {Component} from 'react';
import colors from '../styles/colors';
import {StyleSheet, Text,View, Image, TouchableHighlight} from 'react-native'
import RoundedButton from '../components/buttons/RoundedButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoggedOut extends Component {
    onFacebookPress() {
        alert('Facebook') 
    }

    onCreateAccountPress() {
        alert('Create Account')
    }

    onLoginPress() {
        alert('Login Press')
    }

    render() {
        return(
            <View style = { styles.wrapper }>
                <View style = { styles.welcomeWrapper }>
                    <Image source = { require('../images/reinly_logo.png') } style = { styles.logo }/>
                    <Text style = { styles.welcomeText }>Welcome to Reinly!</Text>
                    <RoundedButton text = "Continue with Facebook"
                                   textColor = {colors.blue}
                                   background = {colors.white}
                                   icon = { <Icon name = "facebook" size = { 20 } style = { styles.facebookButtonIcon } /> }
                                   handleOnPress = {this.onFacebookPress}
                    />
                    <RoundedButton text = "Login"
                                   textColor = { colors.white }
                                   handleOnPress = { this.onLoginPress }
                    />
                    <RoundedButton text = "Create Account"
                                   textColor = { colors.white }
                                   handleOnPress = { this.onCreateAccountPress }
                    />
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
    },
    facebookButtonIcon: {
        color: colors.blue,
        position: 'relative',
        left: 20,
        zIndex: 8
    }
});