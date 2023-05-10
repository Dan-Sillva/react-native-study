import React from "react";
import { View, StyleSheet } from "react-native";

export default props => {
    return (
        <View style={style.container}>
            <View style={props.bigger ? style.flagpoleBigger : style.flagpole}/>
            <View style={props.bigger ? style.flagBigger : style.flag}/>
            <View style={props.bigger ? style.base1Bigger : style.base1}/>
            <View style={props.bigger ? style.base2Bigger : style.base2}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 3,
        marginLeft: 2,
    },

    flagpole: {
        position: 'absolute',

        height: 14,
        width: 2,

        backgroundColor: '#222',
        marginLeft: 9,
    },

    flag: {
        position:'absolute',

        height: 5,
        width: 6,

        backgroundColor: '#f22',
        marginLeft: 3,
    },

    base1: {
        position: 'absolute',

        height: 2,
        width: 6,

        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10,
    },

    base2: {
        position: 'absolute',

        height: 2,
        width: 10,

        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12,
    },

    // Bigger flag
    flagpoleBigger: {
        position: 'absolute',
        
        height: 28,
        width: 4,

        backgroundColor: '#222',
        marginLeft: 16,
    },

    flagBigger: {
        position: 'absolute',
        
        height: 10,
        width: 14,

        backgroundColor: '#f22',
        marginLeft: 3,
    },

    base1Bigger: {
        position: 'absolute',
        
        height: 4,
        width: 12,

        backgroundColor: '#222',
        marginLeft: 12,
        marginTop: 20,
    },

    base2Bigger: {
        position: 'absolute',
        
        height: 4,
        width: 20,

        backgroundColor: '#222',
        marginLeft: 8,
        marginTop: 24,
    },
})