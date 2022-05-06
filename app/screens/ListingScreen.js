import React, { useState,  useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import Screen from '../components/Screen';
import routes from '../Navigation/routes';
import AppCard from '../components/AppCard';
import colors from '../config/colors';
import listingsApi from '../api/listings'
import apiClient from '../api/client';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import useApi from '../hooks/useApi';

// apiClient.get('/listings')

function ListingScreen({ navigation }) {
    const getListingsApi = useApi(listingsApi.getListings)

    useEffect(() => {
        getListingsApi.request(1, 2, 3);
    }, []);


    return (
        <Screen style={styles.screen} >
            {getListingsApi.error && <>
                <AppText>Couldn't retrieve the listings.</AppText>
                <AppButton title='retry' onPress={getListingsApi.request} />
            </>}
            <ActivityIndicator visible={getListingsApi.loading} />
            <FlatList
            data = {getListingsApi.data}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({item}) => 
            <AppCard 
            title={item.title}
            subTitle={"$" + item.price}
            imageURL={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item) }
            />
        }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen : {
        padding: 20,
        backgroundColor: colors.light 
    }
})

export default ListingScreen;

