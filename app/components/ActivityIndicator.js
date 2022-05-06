import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

function ActivityIndicator({ visible = false }) {
    if (!visible) return null;

    return (
        <AnimatedLottieView 
        autoPlay
        loop
        source={require('../assets/animation/loader.json')} />
    );
}

const styles = StyleSheet.create({
  container: {}
});

export default ActivityIndicator;