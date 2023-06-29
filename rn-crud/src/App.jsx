import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserList from '../src/View/UserList/Index';
import UserForm from '../src/View/UserForm/Index';

const Stack = createNativeStackNavigator()

export default props => {
  return (
    <NavigationContainer>
      <Stack.Navigator  {...navigatorProps}>
        <Stack.Screen name={'UserList'} component={UserList}/>
        <Stack.Screen name={'UserForm'} component={UserForm}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const navigatorProps = {
  initialRouteName: 'UserList',
  screenOptions:{
    headerShown: false
  }
}