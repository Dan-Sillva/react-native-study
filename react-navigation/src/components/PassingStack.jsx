import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default props => {
    const { navigate, nextView } = props
    const buttonPass = <Button title='Avançar' onPress={() => navigate(nextView)}/> 

    return (
        <View style={{flex: 1}}>
            {navigate ? buttonPass : false}

            <View style={styles.container}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})