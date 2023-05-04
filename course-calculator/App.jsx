import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import Button from './src/components/Button'
import Display from './src/components/Display';

export default () => {
    const [result, setResult] = useState('0')

    const addDigit = digit => {
        setResult(digit)
    }

    const clearMemory = () => {
        setResult('0')
    }

    const setOperation = operation => {
        console.warn('set')
    }

    return (
        <View style={style.container}>
            <Display value={result}/>

            <View style={style.buttons}>
                <Button label='AC' triple onPress={clearMemory}/>
                <Button label='/' operation onPress={() => setOperation('/')}/>
                <Button label='7' onPress={() => addDigit('7')}/>
                <Button label='8' onPress={() => addDigit('8')}/>
                <Button label='9' onPress={() => addDigit('9')}/>
                <Button label='x' operation onPress={() => setOperation('*')}/>
                <Button label='4' onPress={() => addDigit('4')}/>
                <Button label='5' onPress={() => addDigit('5')}/>
                <Button label='6' onPress={() => addDigit('6')}/>
                <Button label='-' operation onPress={() => setOperation('-')}/>
                <Button label='1' onPress={() => addDigit('1')}/>
                <Button label='2' onPress={() => addDigit('2')}/>
                <Button label='3' onPress={() => addDigit('3')}/>
                <Button label='+' operation onPress={() => setOperation('+')}/>
                <Button label='0' double onPress={() => addDigit('3')}/>
                <Button label='.' onPress={() => addDigit('.')}/>
                <Button label='=' operation onPress={() => setOperation('=')}/>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },

    buttons: {
        flexDirection: 'row',
        flexWrap:'wrap',
    }
})
