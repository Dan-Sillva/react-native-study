// import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ViewA from "../views/ViewA";
import ViewB from "../views/ViewB";
import ViewC from "../views/ViewC";

const Drawer = createDrawerNavigator()

export default props => {
    return (
    <Drawer.Navigator>
        <Drawer.Screen name="View A" component={ViewA} />
        <Drawer.Screen name="View B" component={ViewB} />
        <Drawer.Screen name="View C" component={ViewC} />
    </Drawer.Navigator>
    )
}