import React from 'react';
import { View } from 'react-native';

import Block  from './Block';
import Style from './Style';

export default () => {
    return (
        <View style={Style.FlexV3}>
            <Block color="#34F533"/>
            <Block color="#53B9F5"/>
            <Block color="#F4E83B"/>
            <Block color="#F5228C"/>
            <Block color="#F5A12F"/>
        </View>
    )
}
