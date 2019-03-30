import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import colors from '../../styles/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableHighlight, StyleSheet} from 'react-native'

export default class NextArrowButton extends Component {
    render() {
        const { disabled, handleNextButton } = this.props;
        const opacity = disabled ? { backgroundColor: 'rgba(255, 255, 255, 0.2)' } : { backgroundColor: 'rgba(255,255,255,0.6)' }
        return (
            <TouchableHighlight style = { [opacity, styles.button] } onPress = { handleNextButton } disabled = { disabled }>
                <Icon name = "angle-right" color = { colors.white } size = {32} style = { styles.icon }/>
            </TouchableHighlight>
        );
    }
}

NextArrowButton.propTypes = {
    disabled: PropTypes.bool,
    handleNexButton: PropTypes.func,
};

const styles = StyleSheet.create({
    icon: {
        marginRight: -2,
        marginTop: -2,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 60,
        height: 60
    }
});