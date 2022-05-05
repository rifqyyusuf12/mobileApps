import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ListingScreen from '../screens/ListingScreen'
import ListingDetailsScreen from '../screens/ListingDetailsScreen'

const Stack = createNativeStackNavigator()

const FeedNavigator = () => (
    <Stack.Navigator 
        screenOptions={{ 
            presentation: 'modal',
            headerShown: false,
        }}
    >
        <Stack.Screen name='Listings' component={ListingScreen}/>
        <Stack.Screen name='ListingDetail' component={ListingDetailsScreen}/>
    </Stack.Navigator>
)

export default FeedNavigator;