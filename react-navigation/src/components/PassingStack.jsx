import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default props => {
    const { goBack, advance, nextView } = props
    const buttonPass = <Button title='Avançar' onPress={() => advance(nextView, {number: parseInt(Math.random() * 100)})}/> 
    const buttonBack = <Button title='  Voltar  ' onPress={() => goBack()}/>

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                {goBack ? buttonBack : false}
                {advance ? buttonPass : false}
            </View>

            <View style={{flex: 1}}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 46
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})