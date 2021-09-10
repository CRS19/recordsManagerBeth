import React from 'react'
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
    return (
        <View>
            <Text> Esta es la home </Text>
        </View>
    )
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "#ffff",
            alignItems: "center",
            justifyContent: "center"
        }
    }
)

export default Home