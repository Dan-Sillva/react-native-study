import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default (props) => {
    return (
        <>
            <Text style={style.Number}>{props.number}</Text>
        </>
    )
}

const style = StyleSheet.create({
    Number: {
        width: 30,
        height: 30,
        backgroundColor: '#363532',
        borderRadius: 8,

        color: '#fff',
        textAlignVertical:'center',
        textAlign:'center',

        margin: 4,
    }
})
