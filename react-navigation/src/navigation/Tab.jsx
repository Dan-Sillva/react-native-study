import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

import ViewA from "../views/ViewA";
import ViewB from "../views/ViewB";
import ViewC from "../views/ViewC";

const Tabs = createBottomTabNavigator()

export default props => {
    return (
        <Tabs.Navigator screenOptions={screenOptions}>
            <Tabs.Screen name="View A" component={ViewA}/>
            <Tabs.Screen name="View B" component={ViewB}/>
            <Tabs.Screen name="View C" component={ViewC}/>
        </Tabs.Navigator>
    )
}

const tabOptions = {
    activeTintColor: 'red',
    inactiveTintColor: 'blue',
    labelStyle: {
        fontSize: 30
    }
}

const screenOptions = ({ route }) => ({
    tabBarIcon: () => {
      // You can return any component that you like here!
      return <Ionicons name="basketball-sharp" size={24} color="#f88" />
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  })