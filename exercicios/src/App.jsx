import React from 'react';
import { View, Text } from 'react-native';

// components
import Mega from './components/mega/Mega';

// styles
import GlobalStyle from './styles/GlobalStyle';

export default () => {
    return (
        <View style={GlobalStyle.App}>
            <Mega />
        </View>
    )
}
