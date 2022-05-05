
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

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>ini tweet</Text>
    <Button 
    title ='View Tweet'
    onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
    />
  </Screen>
)

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>ini tweet details {route.params.id} </Text>
  </Screen>
)

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator
    screenOptions={{
      headerStyle : { backgroundColor: 'dodgerblue' },
      headerTintColor: 'white',
      headerShown: false
    }}
    >
      <Stack.Screen name='Tweets' component={Tweets} />
      <Stack.Screen 
      name='TweetDetails' 
      component={TweetDetails}
      options={{
        headerStyle : { backgroundColor: 'tomato' },
        headerTintColor: 'white',
      }}
      />
    </Stack.Navigator>
)

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
)

const Tab = createBottomTabNavigator ();
const TabNavigator = () => (
  <Tab.Navigator
  initialRouteName='chat'
  screenOptions={{ 
    tabBarActiveBackgroundColor: 'tomato',
    tabBarActiveTintColor : 'white',
    tabBarInactiveBackgroundColor: '#eee',
    tabBarInactiveTintColor: 'black'
   }}
  >
    <Tab.Screen 
    name='Feed' 
    component={StackNavigator} 
    options ={{
      tabBarIcon: ({size, color}) => 
        <MaterialCommunityIcons name='home' size={size} color={color}/>
    }}
    />
    <Tab.Screen name='Account' component={Account} />
  </Tab.Navigator>
)


export default function App() {

  return (
    <NavigationContainer theme={navigationTheme} >
      <AppNavigator />
    </NavigationContainer>
  )
}

