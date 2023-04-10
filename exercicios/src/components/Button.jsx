import React from 'react';
import { Button } from 'react-native';

export default (props) => {
    const funcButton = () => {
        console.warn('Executando..')
    }

    return (
        <Button title="executar!" onPress={funcButton} />
    )
}
