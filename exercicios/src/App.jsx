import React from 'react';
import { View } from 'react-native';

// components
import Counter from './components/counterv2/CounterV2'

// styles
import GlobalStyle from './styles/GlobalStyle';

export default () => {
    return (
        <View style={GlobalStyle.App}>
            <Counter />
        </View>
    )
}
