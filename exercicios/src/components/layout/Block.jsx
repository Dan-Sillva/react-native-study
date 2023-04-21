import React from 'react';
import { View } from 'react-native';

import Style from './Style';

export default (props) => {
    return (
        <View style={[Style.SimpleBlock, {backgroundColor: props.color}]}/>
    )
}
