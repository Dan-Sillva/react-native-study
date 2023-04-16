import React from 'react';
import { Button, View } from 'react-native';

import GlobalStyle from '../../styles/GlobalStyle';

export default (props) => {

    const increment = () => {
        props.setNumber(props.number + 1)
    }

    const decrement = () => {
        props.setNumber(props.number - 1)
    }

    return (
        <View style={GlobalStyle.ViewCounterButtons}>
            <Button title="-" onPress={decrement}/>
            <Button title="+" onPress={increment}/>
        </View>
    )
}
