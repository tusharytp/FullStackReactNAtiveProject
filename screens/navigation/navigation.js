import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from '../loginPage/login';
import SignUp from '../signup/signup';
// import Home from '../homePage/get';
import GetApp from '../apiInt/get';
import PostApp from '../apiInt/post';
import PutApp from '../apiInt/put';
import DeleteApp from '../apiInt/delete';

const Stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <tab.Navigator>
            <tab.Screen name={"Get/Filter"} component={GetApp} />
            <tab.Screen name={"POST"} component={PostApp} />
            <tab.Screen name={"PUT"} component={PutApp} />
            <tab.Screen name={"DELETE"} component={DeleteApp} />
        </tab.Navigator>
    )
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen name="SignIn" component={LoginScreen} options={{ title: 'Sign In' }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
                <Stack.Screen name='home' component={TabNav} options={{ title: 'Home' }} />

            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default App;
