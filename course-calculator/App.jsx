import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import Button from './src/components/Button'
import Display from './src/components/Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default () => {
    const [state, setState] = useState(initialState)

    const addDigit = digit => {
        if(digit === '.' && state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = state.displayValue === '0' || state.clearDisplay

        const validateDisplayValueAndDigitValue = clearDisplay && digit != '.'
        const newDigit = validateDisplayValueAndDigitValue ? digit : state.displayValue + digit

        setState(prevState => ({ ...prevState, displayValue: newDigit }))

        if(digit !== '.') {
            const newValue = parseFloat(newDigit)
            const values = [ ...state.values ]
            values[state.current] = newValue

            setState(prevState => ({ ...prevState, values }))
        }
    }

    const clearMemory = () => {
        setState({ ...initialState })
    }

    const setOperation = operation => {
        if(state.current === 0){
            setState(prevState => ({ ...prevState, operation, current: 1, clearDisplay: true }))
        } else {
            const validateEqualsOperation = operation === '='
            const values = [ ...state.values ]

            try {
                values[0] = eval(`${values[0]} ${state.operation} ${values[1]}`)
            } catch(error) {
                console.warn(error)
            }

            values[1] = 0
            setState(prevState => ({
                ...prevState,
                displayValue: `${values[0]}`,
                operation: validateEqualsOperation ? null : operation,
                current: validateEqualsOperation ? 0 : 1,
                values
            }))
        }
    }

    return (
        <View style={style.container}>
            <Display value={state.displayValue}/>

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
                <Button label='0' double onPress={() => addDigit('0')}/>
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
