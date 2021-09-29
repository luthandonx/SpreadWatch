import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import home from "./HomeScreen";
import report from "./ReportScreen";
import map from "./MapScreen";

const Stack = createStackNavigator();

const ScreenStack = () =>{
   
    return (
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name = "Home" component = {home} />
            <Stack.Screen name= "Report" component = {report}/>
            <Stack.Screen name = "Map" component = {map} />

        </Stack.Navigator>
    </NavigationContainer>
    )
};



export default ScreenStack;