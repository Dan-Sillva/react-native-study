import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ViewA from "../views/ViewA";
import ViewB from "../views/ViewB";
import ViewC from "../views/ViewC";
import PassingStack from "../components/PassingStack";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName="View A" screenOptions={{headerShown: false}}>
            <Stack.Screen name="View A" options={{title: ':D'}}>
                {screenProps => (
                    <PassingStack advance={screenProps.navigation.navigate} nextView={'View B'}>
                        <ViewA />
                    </PassingStack>
                )}
            </Stack.Screen>
            <Stack.Screen name="View B" options={{title: ':D'}}>
                {screenProps => (
                    <PassingStack 
                    advance={screenProps.navigation.navigate} 
                    goBack={screenProps.navigation.goBack}
                    nextView={'View C'}>
                        <ViewB />
                    </PassingStack>
                )}
            </Stack.Screen>
            <Stack.Screen name="View C" options={{title: ':D'}}>
                {screenProps => (
                    <PassingStack 
                    advance={screenProps.navigation.push}
                    goBack={screenProps.navigation.goBack}
                    nextView={'View C'}>
                        <ViewC {...screenProps}/>
                    </PassingStack>
                )}
            </Stack.Screen>

        </Stack.Navigator>
    )
}