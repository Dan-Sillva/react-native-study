import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import TextInput from '../../components/TextInput/Index'
import styles from './styles';

export default props => {
  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput {...inputName}/>
          <TextInput {...inputEmail}/>
          <TextInput {...inputAvatarUrl}/>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Salvar
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const inputName = {
  placeholder: 'Nome',
}

const inputEmail = {
  placeholder: 'Email',
}

const inputAvatarUrl = {
  placeholder: 'Url do avatar',
}