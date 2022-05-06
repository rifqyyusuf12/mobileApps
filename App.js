
import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  SafeAreaView, 
  Button, 
  Alert, 
  Platform, 
  StatusBar,
  TextInput,
  Switch,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Screen from './app/components/Screen'
import AuthNavigator from './app/Navigation/AuthNavigator';
import navigationTheme from './app/Navigation/navigationTheme';
import AppNavigator from './app/Navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';


export default function App() {

  return (
    <>
    <OfflineNotice />
    <NavigationContainer theme={navigationTheme} >
      <AppNavigator />
    </NavigationContainer>
    </>
  )
}

