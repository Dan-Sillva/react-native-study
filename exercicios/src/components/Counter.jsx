import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import GlobalStyle from '../styles/GlobalStyle';

export default (props) => {
    const [number, setNumber] = useState(parseInt(props.initialNumber))

    const increment = () => setNumber(number + 1)
    const decrement = () => setNumber(number - 1)
    
    return (
        <View style={GlobalStyle.ViewStyle}>
            <Text style={GlobalStyle.TextCounter}>{number}</Text>
            <View style={GlobalStyle.ViewCounterButtons}>
                <Button title="-" onPress={decrement}/>
                <Button title="+" onPress={increment}/>
            </View>
        </View>
    )
}