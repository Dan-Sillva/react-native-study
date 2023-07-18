import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import UserCardList from '../../components/UserCardList/Index';

import styles from './styles';

export default props => {
  return (
    <SafeAreaView style={styles.container}>
      <UserCardList {...props}/>
    </SafeAreaView>
  );
}
