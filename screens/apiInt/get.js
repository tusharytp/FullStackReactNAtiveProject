import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
// import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/Feather";

const GetApp = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [usertext, setText] = useState("");

    const getApi = async () => {
        console.log('function called');
        try {
            let result = await fetch('http://10.0.2.2:3002/data');
            result = await result.json();
            // console.log(result);
            setData(result);
            setFilteredData(result); // Initialize filtered data with all data
        } catch (err) {
            console.log("Error: ", err);
        }
    };

    useEffect(() => {
        getApi();
    }, []);

    const filterData = (text) => {
        if (text === "") {
            setFilteredData(data); // Reset to original data if search is empty
        } else {
            const newData = data.filter(item => item.first_name.toLowerCase().includes(text.toLowerCase()));
            setFilteredData(newData);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View >
                <View style={{
                    flexDirection: 'row', alignItems: 'center', borderColor: "white",
                    borderWidth: 2,
                    borderRadius: 37,
                    fontSize: 15,
                    padding: 5,
                    paddingLeft: 15,
                    margin: 10,
                    shadowOpacity: 1,
                    shadowColor: "black",
                    shadowOffset: { width: 0, height: 2 },
                    justifyContent: 'space-between',
                    paddingHorizontal: 10
                }}>
                    <TextInput
                        placeholder="Search Here"

                        onChangeText={(text) => setText(text)}
                    />
                    <Icon name="search" size={20} color={'grey'} ></Icon>

                </View>
                <View >
                    <Button
                        title="Search"
                        style={styles.buttoning}
                        onPress={() => filterData(usertext)}
                    />
                </View>

            </View>
            <FlatList
                data={filteredData}
                renderItem={({ item }) => (
                    <View style={styles.smallContainer}>
                        <Text style={styles.subSmallIdContainer}>{item.id}</Text>
                        <Text style={styles.subSmallContainer}>{item.first_name}</Text>
                        <Text style={styles.subSmallContainer}>{item.last_name}</Text>
                        <Text style={styles.subSmallContainer}>{item.email}</Text>
                        <Text style={styles.subSmallContainer}>{item.gender}</Text>
                        <Text style={styles.subSmallContainer}>{item.job_title}</Text>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    smallContainer: {
        backgroundColor: "#8C9EA6",
        padding: 10,
        margin: 10,
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 15,
    },
    subSmallContainer: {
        backgroundColor: '#768C97',
        padding: 5,
        margin: 10,
        fontSize: 20,
        color: "white",
        borderRadius: 10,
    },
    subSmallIdContainer: {
        backgroundColor: 'red',
        padding: 5,
        margin: 10,
        fontSize: 20,
        color: "white",
        textAlign: "center"
    },
    searchDabba: {
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 37,
        fontSize: 15,
        padding: 5,
        paddingLeft: 15,
        margin: 10,
        shadowOpacity: 1,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        // elevation: 2,
    },
    buttoning: {
        borderRadius: 10,
        padding: 10,
        margin: 10,
        color: "gold"
    }
});

export default GetApp;