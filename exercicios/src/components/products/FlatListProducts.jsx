import React from 'react';
import { Text, FlatList } from 'react-native';

import products from './productsDB'
import GlobalStyle from '../../styles/GlobalStyle';

export default () => {
    const renderFunc = ({item}) => {
        return <Text key={item.id}>{item.id},{item.name},{item.price}</Text>
    }

    return (
        <>
            <Text style={GlobalStyle.Title}>
                Lista de Produtos V2:
            </Text>
            <FlatList data={products} renderItem={renderFunc}/>
        </>
    )
}
