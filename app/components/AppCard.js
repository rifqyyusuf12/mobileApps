import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Image } from 'react-native-expo-image-cache'

import colors from '../config/colors';
import AppText from './AppText';

function AppCard({title, subTitle, imageUrl , onPress, thumbnailUrl }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Image 
                style={styles.image} 
                tint='light'
                preview={{ uri: thumbnailUrl }} 
                uri={imageUrl} />
            <View style={styles.detailsContainer}>
            <AppText style={styles.title} >{title}</AppText>
            <AppText style={styles.subTitle} >{subTitle}</AppText>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card : {
        borderRadius : 15,
        backgroundColor: colors.white,
        marginBottom: 20, 
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailsContainer : {
        padding: 20,
    },
    title: {
        marginBottom: 7,
        fontSize: 15
    },
    subTitle : {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 15
    },
})

export default AppCard;