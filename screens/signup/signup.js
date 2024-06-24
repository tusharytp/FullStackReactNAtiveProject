import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Alert,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    Image,
    StyleSheet
} from 'react-native';
import styles from './style';


const SignUp = ({ navigation }) => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        if (userName === '' || email === '' || password === '') {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
        try {
            const result = fetch('http://10.0.2.2:3002/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        userName,
                        email,
                        password
                    }
                )
            })
                .then(response => response.json())
                .then(data => console.log('successfully submitted the data', data))
        } catch (err) {
            console.log('ERROR OCCURED: ', err)
        }
        navigation.navigate('SignIn')
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={require('/home/ytp-ind-desk09/Documents/CRUD/frontEnd/src/images/parrish-freeman-K2W8TIxcuko-unsplash.jpg')}
                style={{ flex: 1 }}
            >
                <View style={styles.container}>
                    <Image source={require('/home/ytp-ind-desk09/Documents/CRUD/frontEnd/src/images/FFF.png')} style={styles.logo}></Image>
                    <Text style={styles.title}>Signup</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="User Name"
                        value={userName}
                        onChangeText={(text) => setUserName(text)}
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView >
    );
};



export default SignUp;
