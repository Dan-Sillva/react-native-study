import React from 'react';
import { Text } from 'react-native';

import If from './If'
import GlobalStyle from '../styles/GlobalStyle';

export default ({user = {}}) => {
    const test = user && user.name && user.mail
    return (
        <>
            <If test={test}>
                <Text style={GlobalStyle.TextCounter}>Usuário:</Text>
                <Text style={GlobalStyle.TextCounter}>{user.name}:{user.mail}</Text>
            </If>
        </>
    )
}
