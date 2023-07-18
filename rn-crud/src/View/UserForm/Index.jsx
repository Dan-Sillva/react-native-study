import React, { useContext, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import TextInput from '../../components/TextInput/Index'
import UserContext from '../../context/UserContext';
import styles from './styles';

export default props => {
  const [user, setUser] = useState(props.route.params ? props.route.params : {})
  const { dispatch } = useContext(UserContext)

  const inputName = {
    placeholder: 'Nome',
    onChangeText: name => setUser({...user, name}),
    value: user.name
  }
  
  const inputEmail = {
    placeholder: 'E-mail',
    onChangeText: email => setUser({...user, email}),
    value: user.email
  }
  
  const inputAvatarUrl = {
    placeholder: 'Url do avatar',
    onChangeText: avatarUrl => setUser({...user, avatarUrl  }),
    value: user.avatarUrl
  }

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput {...inputName}/>
          <TextInput {...inputEmail}/>
          <TextInput {...inputAvatarUrl}/>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {
            dispatch({
              type: user.id ? 'updateUser' : 'createUser',
              payload: user
            })
            props.navigation.goBack()
          }}>
            <Text style={styles.buttonText}>
              Salvar
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}