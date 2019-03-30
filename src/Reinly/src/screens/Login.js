import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome'
import {View, Text, ScrollView, StyleSheet, KeyboardAvoidingView} from 'react-native'
import InputField from '../components/form/InputField'

export default class Login extends Component {
    render() {
        return(
            <KeyboardAvoidingView style = {styles.wrapper}>
                <View style = {styles.scrollViewWrapper}>
                    <ScrollView style = {styles.scrollView}>
                        <Text style ={styles.loginHeader}>Log In</Text>
                        <InputField labelText = "EMAIL ADDRESS"
                                    labeTextSize = {14}
                                    labelColor = {colors.white}
                        />
                        <InputField labelText = "PASSWORD"
                                    labeTextSize = {14}
                                    labelColor = {colors.white}
                        />
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.blue
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
    }
});