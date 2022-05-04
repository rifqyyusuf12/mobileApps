
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

import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {

  return (
    <ListingEditScreen />
  )
}

