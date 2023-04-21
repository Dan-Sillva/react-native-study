import React from 'react';
import { View, StyleSheet } from 'react-native';

// import Block  from './Block';
import Style from './Style';

export default () => {
    return (
        <View style={Style.FlexV4}>
            <View style={st.V1}/>
            <View style={st.V2}/>
        </View>
    )
}

const st = StyleSheet.create({
    V1: {
        backgroundColor: '#34F533',
        flexGrow:1,
    },

    V2: {
        backgroundColor: '#F5228C',
        flexGrow:2,
    }
})
