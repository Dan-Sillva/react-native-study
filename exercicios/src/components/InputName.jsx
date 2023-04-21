import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

import GlobalStyle from '../styles/GlobalStyle';

export default () => {
    const [name, setName] = useState('name')

    return (
        <View>
            <Text>{name}</Text>
            <TextInput
                placeholder="Digite seu nome"
                // value={name}
                onChangeText={setName}
            />
        </View>
    )
}
