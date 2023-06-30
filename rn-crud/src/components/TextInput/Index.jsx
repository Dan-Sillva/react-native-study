import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

export default props => {
  const { placeholder } = props

  return (
    <View style={styles.container}>
        <TextInput 
            style={styles.input} 
            placeholder={placeholder}
            cursorColor={'#a0a0a0'}/>
    </View>
  );
}
