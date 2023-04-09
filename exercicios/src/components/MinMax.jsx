import React from 'react'
import { Text } from 'react-native'

export default (props) => {
    return (
        <Text>O valor {props.max} é maior que o valor {props.min}</Text>
    )
}
