import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import BackGround from '../backGroundImage/backGround';

const Home = () => {
    return (
        <SafeAreaView>
            <BackGround>
                <View>
                    <Text>
                        Congrats!!!!
                    </Text>
                </View>
            </BackGround>
        </SafeAreaView>
    )
}

export default Home;