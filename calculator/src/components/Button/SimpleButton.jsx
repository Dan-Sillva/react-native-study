import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Style from './Style';

export default (props) => {
    return (
        <TouchableOpacity style={[Style.SimpleButton, props.style]}>
            <Text style={[Style.TextSimpleButton, props.styleText]}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}