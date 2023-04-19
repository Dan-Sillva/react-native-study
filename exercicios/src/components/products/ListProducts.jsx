import React from 'react';
import { Text } from 'react-native';

import products from './productsDB'
import GlobalStyle from '../../styles/GlobalStyle';

export default () => {
    return (
        <>
            <Text style={GlobalStyle.Title}>Lista de Produtos:</Text>
            {products.map(p => {
                return <Text key={p.id}>{p.id}:{p.name}:{p.price}</Text>
            })}
        </>
    )
}
