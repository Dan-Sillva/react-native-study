import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ViewA from "../views/ViewA";
import ViewB from "../views/ViewB";
import ViewC from "../views/ViewC";
import PassingStack from "../components/PassingStack";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName="View A">
            <Stack.Screen name="View A" options={{title: ':D'}}>
                {screenProps => (
                    <PassingStack navigate={screenProps.navigation.navigate} nextView={'View B'}>
                        <ViewA />
                    </PassingStack>
                )}
            </Stack.Screen>
            <Stack.Screen name="View B" options={{title: ':D'}}>
                {screenProps => (
                    <PassingStack navigate={screenProps.navigation.navigate} nextView={'View C'}>
                        <ViewB />
                    </PassingStack>
                )}
            </Stack.Screen>
            <Stack.Screen name="View C" options={{title: ':D'}}>
                {screenProps => (
                    <PassingStack>
                        <ViewC />
                    </PassingStack>
                )}
            </Stack.Screen>

        </Stack.Navigator>
    )
}