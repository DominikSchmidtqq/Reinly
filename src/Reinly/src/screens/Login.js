import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome'
import {View, Text, ScrollView, StyleSheet, KeyboardAvoidingView} from 'react-native'
import InputField from '../components/form/InputField'
import NextArrowButton from '../components/buttons/NextArrowButton'
import Notification from '../components/Notification';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: true,

        };
        this.handleCloseNotification = this.handleCloseNotification.bind(this);
    }

    handleNextButton() {
        alert("Next Button")
    }

    handleCloseNotification() {
        this.setState({ formValid: true });
    }

    render() {
        const { formValid } = this.state;
        const showNotification = formValid ? false : true;
        const background = formValid ? colors.blue : colors.burntOrange;
        return(
            <View style = { [{ backgroundColor: background }, styles.wrapper] } behavior = "padding">
                <View style = { styles.scrollViewWrapper }>
                    <ScrollView style = { styles.scrollView }>
                        <Text style = { styles.loginHeader }>Log In</Text>
                        <InputField labelText = "EMAIL ADDRESS"
                                    labeTextSize = { 14 }
                                    labelColor = { colors.white }
                                    textColor = { colors.white }
                                    borderBottomColor = { colors.white }
                                    inputType = "email"
                                    customStyle = {{ marginBottom: 30 }}
                        />
                        <InputField labelText = "PASSWORD"
                                    labeTextSize = { 14 }
                                    labelColor = { colors.white }
                                    textColor = { colors.white }
                                    borderBottomColor = { colors.white }
                                    inputType = "password"
                                    customStyle = { {marginBottom: 30} }
                        />
                    </ScrollView>
                    <View style = { styles.nextButton }>
                        <NextArrowButton
                            handleNextButton = { this.handleNextButton }
                        />
                    </View>
                    <View style = { showNotification ? {marginTop: 10} : {}}>
                        <Notification showNotification = { showNotification } handleCloseNotification = { this.handleCloseNotification }  type = "Error" firstLine = "Invalid credentials." secondLine = " Please try again."/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,

    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1
    },
    loginHeader: {
        fontSize: 36,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40
    },
    nextButton: {
        alignItems: 'flex-end',
        right: 20,
        bottom: 10
    }
});