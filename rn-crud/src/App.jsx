import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "@rneui/base";
import { Ionicons } from '@expo/vector-icons';

import UserList from '../src/View/UserList/Index';
import UserForm from '../src/View/UserForm/Index';
import { UserProvider } from "./context/UserContext";

const Stack = createNativeStackNavigator()

export default props => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator {...navigatorProps}>

          <Stack.Screen {...userListScreenProps}/>
          <Stack.Screen {...userFormScreenProps}/>

        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

const navigatorProps = {
  initialRouteName: 'UserList',
  screenOptions: {
    headerShown: true,
    headerStyle: {
      backgroundColor: '#f45f11',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 22,
    },
    headerTitleAlign: 'center',
  },
}

const userFormScreenProps = {
  name: 'UserForm', 
  component: UserForm,
  options: {
    title: 'Formulário de Usuários'
  },
}

const userListScreenProps = {
  name: 'UserList',
  component: UserList,
  options: ({ navigation }) => {
    return {
      title: 'Lista de Usuários',
      headerRight: () => (
        <Button 
          onPress={() => {navigation.navigate('UserForm')}}
          type='clear'
          icon={<Ionicons name='add' size={26} color='white'/>}
        />
      )
    }
  },
}