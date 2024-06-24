import React, { useState } from "react";
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const PostApp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [error, setError] = useState("");

    const postAPI = async () => {
        if (!firstName || !lastName || !email || !gender || !jobTitle) {
            setError("Please fill all the fields.");
            return;
        }
        setError("");  // Clear previous errors

        try {
            const response = await fetch('http://10.0.2.2:3002/data', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    gender: gender,
                    job_title: jobTitle
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.msg);
                console.log(errorData)
            }

            // Handle success (e.g., clear form, display success message)
            setFirstName("");
            setLastName("");
            setEmail("");
            setGender("");
            setJobTitle("");
            setError("User created successfully!");

        } catch (err) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>POST FORM</Text>
                <Text style={styles.sideHeadings}>FIRST NAME</Text>
                <TextInput
                    placeholder="Enter Your First Name"
                    placeholderTextColor={'#4E5C64'}
                    value={firstName}
                    onChangeText={setFirstName}
                    style={styles.inputDabba}

                />
                <Text style={styles.sideHeadings}>LAST NAME</Text>
                <TextInput
                    placeholder="Enter Your Last Name"
                    placeholderTextColor={'#4E5C64'}
                    value={lastName}
                    onChangeText={setLastName}
                    style={styles.inputDabba}
                />
                <Text style={styles.sideHeadings}>EMAIL</Text>
                <TextInput
                    placeholder="Enter Your Email"
                    placeholderTextColor={'#4E5C64'}
                    value={email}
                    onChangeText={setEmail}
                    style={styles.inputDabba}
                />
                <Text style={styles.sideHeadings}>GENDER</Text>
                <TextInput
                    placeholder="Enter Your Gender"
                    placeholderTextColor={'#4E5C64'}
                    value={gender}
                    onChangeText={setGender}
                    style={styles.inputDabba}
                />
                <Text style={styles.sideHeadings}>JOB TITLE</Text>
                <TextInput
                    placeholder="Enter Your Job Title"
                    placeholderTextColor={'#4E5C64'}
                    value={jobTitle}
                    onChangeText={setJobTitle}
                    style={styles.inputDabba}
                />
                {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
                <View>
                    <Button
                        title="Submit"
                        color="grey"
                        onPress={postAPI}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: 'black',
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        marginTop: 10,
    },
    sideHeadings: {
        fontSize: 15,
        fontStyle: "normal",

        color: "#4E5C64",
        marginLeft: 10,

    },
    inputDabba: {
        borderColor: 'white',
        borderWidth: 4,
        borderRadius: 10,
        backgroundColor: '#DFE1E3',

        margin: 10,
        padding: 10
    },
    container: {
        flex: 1,
    }
})

export default PostApp;