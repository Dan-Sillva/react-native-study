import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

export default props => {

  return (
    <View style={styles.container}>
        <TextInput 
            style={styles.input} 
            cursorColor={'#a0a0a0'}
            {...props}/>
    </View>
  );
}
