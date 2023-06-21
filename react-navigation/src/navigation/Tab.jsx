import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ViewA from "../views/ViewA";
import ViewB from "../views/ViewB";
import ViewC from "../views/ViewC";

const Tabs = createBottomTabNavigator()

export default props => {
    return (
        <Tabs.Navigator tabBarOptions={tabOptions} screenOptions={{headerShown: false}}>
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