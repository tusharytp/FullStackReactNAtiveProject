import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Alert,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    Image
} from 'react-native';
import styles from './style';
import SplashScreen from 'react-native-splash-screen';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === '' || password === '') {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        fetch('http://10.0.2.2:3002/signin', {  // Correct endpoint should be /signin for login
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.msg === 'Success') {  // Adjust according to your backend response
                    navigation.navigate('home');
                } else {
                    Alert.alert('Error', data.msg);
                }
            })
            .catch(err => {
                console.warn(`ERROR OCCURRED: ${err}`);
                Alert.alert('Error', 'An error occurred. Please try again.');
            });
    };

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide()
        }, 1000)
    })

    function navigateTo() {
        navigation.navigate('SignUp')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={require('/home/ytp-ind-desk09/Documents/CRUD/frontEnd/src/images/parrish-freeman-K2W8TIxcuko-unsplash.jpg')}
                style={{ flex: 1 }}
            >
                <View style={styles.container}>
                    <Image source={require('/home/ytp-ind-desk09/Documents/CRUD/frontEnd/src/images/FFF.png')} style={styles.logo}></Image>
                    <Text style={styles.title}>Login</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.newuser}>
                        <Text style={{ color: 'black' }}>NEW USER?  </Text>
                        <TouchableOpacity onPress={navigateTo}>
                            <Text style={styles.create}>Create Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView >
    );
};


export default LoginScreen;

