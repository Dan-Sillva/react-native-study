import React, { useState } from 'react';
import { Text } from 'react-native';

import CounterDisplay from './CounterDisplay'

import GlobalStyle from '../../styles/GlobalStyle';

export default () => {
    const [number, setNumber] = useState(0)

    return (
        <>
            <Text style={GlobalStyle.TextCounter}>{number}</Text>
            <CounterDisplay number ={number} setNumber={setNumber}/>
        </>
    )
}
