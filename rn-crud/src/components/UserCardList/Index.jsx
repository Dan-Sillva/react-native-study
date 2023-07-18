import React, { useContext } from 'react';
import { ScrollView } from 'react-native';

import UserCard from '../UserCard/Index'

import UserContext from '../../context/UserContext';
import styles from './styles';

export default props => {
  const { navigation } = props

  const { state, dispatch } = useContext(UserContext)  
 

  const listUserComponent = state.users.map(user => {
    return (
        <UserCard key={user.id} user={user} nav={navigation} deleteAction={() => {dispatch({
          type: 'deleteUser',
          payload: user
        })}}/>
    )
  })

  return ( 
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        {listUserComponent}
    </ScrollView>
  );
}
