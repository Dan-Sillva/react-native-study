import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
const Icon = MaterialCommunityIcons

export default props => {
  const { user, editAction, deleteAction } = props

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={styles.avatarImage} source={{uri: user.avatarUrl}}/>
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.name}>
                {user.name}
            </Text>
            <Text style={styles.email}>
                {user.email}
            </Text>
        </View>

        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={()=> {props.nav.navigate('UserForm', user)}}>
                <Icon name="clipboard-edit" size={22} color="#36373b" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={deleteAction}>
                <Icon name="delete" size={22} color="#36373b" />
            </TouchableOpacity>
        </View>
    </View>
  );
}
