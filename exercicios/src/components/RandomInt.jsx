import React from 'react';
import { Text } from 'react-native';

const RandInt = (props) => {
    const max = parseInt(props.max)
    const min = parseInt(props.min)

    const result = Math.floor(
        Math.random() * (max - min + 1) + min
    )

    return result
}

export default (props) => {
    return (
        <Text>O valor é {RandInt(props)}</Text>
    )
}
