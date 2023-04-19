import React from 'react';
import { View, Text } from 'react-native';

// components
import FlatListProducts from './components/products/FlatListProducts'

// styles
import GlobalStyle from './styles/GlobalStyle';

export default () => {
    return (
        <View style={GlobalStyle.App}>
            <FlatListProducts />
        </View>
    )
}
