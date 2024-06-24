import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const App = () => {

    const [name, setName] = useState("");
    cosnt[password, setPassword] = useState("");

    getApi = () => {
        fetch
    }

    return (
        <View>
            <Text>
                API Form
            </Text>
            <TextInput value={name} placeholder='please Enter name' onChangeText={() => {
                setName(name);
            }}>
            </TextInput>
            <TextInput placeholder='please Enter password' value={password} onChangeText={() => {
                setPassword(password);
            }}>
            </TextInput>
            <View>
                <Button title="get" />
            </View>

        </View>
    )
}