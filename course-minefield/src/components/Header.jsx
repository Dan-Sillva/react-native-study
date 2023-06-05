import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Flag from "./Flag";

export default (props) => {
    return (
        <View style={style.container}>
            <View style={style.flagContainer}>
                <TouchableOpacity style={style.flagButton} onPress={props.onFlagPress}>
                    <Flag bigger/>
                </TouchableOpacity>

                <Text style={style.flagsLeft}>: {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={style.button} onPress={props.onNewGame}>
                <Text style={style.buttonLabel} >New Game</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: "space-around",
        paddingHorizontal: 20,
        width: 400,
        marginBottom: 20
    },

    flagContainer: {
        flexDirection: 'row'
    },

    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20
    },

    button: {
        backgroundColor: '#f88',
        padding: 10,
        borderRadius: 10
    },

    buttonLabel: {
        fontSize: 20,
        color: '#ddd',
        fontWeight: 'bold'
    }
})