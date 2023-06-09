import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                View C
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffc'
    }
})
