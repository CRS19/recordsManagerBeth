import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Icon from "react-native-vector-icons/FontAwesome"
import { NavigationContainer } from "@react-navigation/native";
import homeScreen from "../components/homeScreen/homeScreen";


const leftIcon = (navigation: any, icon: any) => {
    <Icon
        name={icon}
        style={{ marginLeft: 20}}
        size={20}
        color="#000"
        onPress={ () => navigation.openDrawer() }
    />
};

const homeScreenStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ( {navigation }) => ({
            title: "Home",
            headerLeft: () => leftIcon (navigation, "bars")
        })
    }
})

export default homeScreenStack