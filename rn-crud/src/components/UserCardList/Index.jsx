import React from 'react';
import { ScrollView, Text } from 'react-native';

import UserCard from '../UserCard/Index'

import users from '../../data/users'
import styles from './styles';

const listUserComponent = users.map(user => {
    return (
        <UserCard user={user} key={user.id}/>
    )
})

export default props => {
  return ( 
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        {listUserComponent}
    </ScrollView>
  );
}
