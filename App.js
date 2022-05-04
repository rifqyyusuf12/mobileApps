
import React, {useEffect, useState} from 'react'
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
import * as ImagePicker from 'expo-image-picker';
import * as Permission from 'expo-permissions'


import AppCard from './app/components/AppCard';
import Screen from './app/components/Screen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Icon from './app/components/Icon';
import AppListItem from './app/components/AppListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import AppText from './app/components/AppText';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';

export default function App() {

  return (
    <ListingEditScreen />
  )
}

