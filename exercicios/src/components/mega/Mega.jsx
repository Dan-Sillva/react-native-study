import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import Number from "./Number";
import GlobalStyle from "../../styles/GlobalStyle";

export default class Mega extends React.Component {

    state = {
        qttNumber: 0,
        numbers: []
    }

    setNumber(qtt) {
        this.setState({qttNumber: parseInt(qtt)})
    }

    randomNumbers = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.randomNumbers(nums) : novo
    }

    addNumbers = () => {
        const numbers = Array(this.state.qttNumber).fill()
            .reduce(nums => [...nums, this.randomNumbers(nums)], [])
            .sort((a, b) => a - b)
        this.setState({ numbers })
    }

    render() {
        return (
            <View style={style.View}>
                <View style={style.ViewNumbers}>
                    {this.state.numbers.map(n => {
                        return <Number number={n} />
                    })}
                </View>
                <Text style={GlobalStyle.Title}>Gerador Mega</Text>

                <TextInput
                    keyboardType='numeric'
                    style={style.Input}
                    placeholder="Digite um numero"
                    onChangeText={qtt => this.setNumber(qtt)}
                />

                <Button
                    title="Enviar"
                    onPress={this.addNumbers}
                />
            </View>

        )
    }
}

const style = StyleSheet.create({
    View: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },

    ViewNumbers: {
        flexDirection: 'row',
        marginBottom: 30,
        justifyContent: 'center',

        flexWrap: 'wrap',
    },

    Input: {
        borderBottomWidth:1,
        width:260,
        textAlign:'center',
        marginBottom: 60
    },
})
