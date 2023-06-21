import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default props => {
    const number = props.route
        && props.route.params
        && props.route.params.number ? props.route.params.number : 0
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                View C
            </Text>
            <Text style={styles.text}>
                {number}
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
