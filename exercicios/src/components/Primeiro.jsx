import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default () => {
    return (
        <Text style={style.Tittle}>Hello World</Text>
    )
}

const style = StyleSheet.create({
    Tittle: {
        fontSize:24,
        marginBottom: 12
    }
})
