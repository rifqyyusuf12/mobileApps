import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import AppButton from '../components/AppButton';
import routes from '../Navigation/routes';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground 
        blurRadius='10'
        style={styles.background}
        source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text style={styles.tagline}>Sell what you don't need !</Text>
            </View>
            <View style={styles.buttonsContainer}>
            <AppButton title='Login' onPress={()=>navigation.navigate(routes.LOGIN)}/>
            <AppButton title='Register' color='secondary' onPress={()=>navigation.navigate(routes.REGISTER)}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    logoContainer: {
        position: 'absolute',
        top: 80,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
    buttonsContainer: {
        padding: 10,
        width: '100%'
    },
    tagline:{
        fontSize: 20,
        fontWeight: '600',
        paddingVertical: 20,
    }
})

export default WelcomeScreen;