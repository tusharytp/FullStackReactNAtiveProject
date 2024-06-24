import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import GetApp from "./get";
import PostApp from "./post";
import PutApp from "./put";
import DeleteApp from "./delete";

const tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <tab.Navigator>
                <tab.Screen name={"Get/Filter"} component={GetApp} />
                <tab.Screen name={"POST"} component={PostApp} />
                <tab.Screen name={"PUT"} component={PutApp} />
                <tab.Screen name={"DELETE"} component={DeleteApp} />
            </tab.Navigator>
        </NavigationContainer>
    )
}

export default App