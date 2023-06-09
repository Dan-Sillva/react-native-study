import React from "react";
import { StyleSheet, Text } from "react-native";

export default props => {
    return (
        <Text style={styles.text}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }  
})