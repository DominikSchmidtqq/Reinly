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
            validEmail: false,
            emailAddress: '',
            validPassword: false,


        };
        this.handleCloseNotification = this.handleCloseNotification.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleNextButton() {
        if (this.state.emailAddress === '123@gmail.com' && this.state.validPassword) {
            this.setState({ formValid: true})
        } else {
            this.setState({ formValid: false})
        }
    }

    handleCloseNotification() {
        this.setState({ formValid: true });
    }

    handleEmailChange(email) {
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({ emailAddress: email})
        if (!this.state.validEmail) {
            if (emailCheckRegex.test(email)) {
                this.setState({ validEmail: true});
            } else if (!emailCheckRegex.test(email)) {
                this.setState({ validEmail: false})
            }
        }
    }

    handlePasswordChange(password) {
        if (!this.state.validPassword) {
            if (password.length > 6) {
                this.setState({ validPassword: true })
            } else if (password.length <= 6) {
                this.setState({ validPassword: false })
            }
        }
    }

    toggleNextButtonState() {
        const { validEmail, validPassword} = this.state;
        if (validEmail && validPassword) {
            return false;
        }
        return true;
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
                                    onChangeText = { this.handleEmailChange }
                        />
                        <InputField labelText = "PASSWORD"
                                    labeTextSize = { 14 }
                                    labelColor = { colors.white }
                                    textColor = { colors.white }
                                    borderBottomColor = { colors.white }
                                    inputType = "password"
                                    customStyle = { {marginBottom: 30} }
                                    onChangeText={ this.handlePasswordChange }
                        />
                    </ScrollView>
                    <View style = { styles.nextButton }>
                        <NextArrowButton
                            handleNextButton = { this.handleNextButton }
                            disabled = { this.toggleNextButtonState() }
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