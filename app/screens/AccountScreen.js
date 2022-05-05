import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native'

import Icon from '../components/Icon';
import { AppListItem, ListItemSeparator } from '../components/lists';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../Navigation/routes';

const menuItems = [
    {
        title: 'My Listing',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES
    }
]

function AccountScreen({ navigation }) {
    return (
       <Screen style={styles.screen} >
           <View style={styles.container}>
            <AppListItem
            title="Mosh Hamedani"
            subTitle="programmingwithmosh@gmail.com"
            image={require('../assets/mosh.jpg')}
            />
           </View>
           <View style={styles.container}>
               <FlatList
               data={menuItems}
               keyExtractor={menuItem => menuItem.title}
               ItemSeparatorComponent={ListItemSeparator}
               renderItem = {({item}) => 
                <AppListItem 
                    title={item.title}
                    IconComponent = {
                        <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                    }
                    onPress={() => navigation.navigate(item.targetScreen)}
                />
                }
               />
           </View>
           <AppListItem 
            title='Log Out'
            IconComponent={
                <Icon name="logout" backgroundColor='#ffe66d' />
            }
           />
       </Screen>
    );
}

const styles = StyleSheet.create({
    screen : {
        backgroundColor: colors.light
    },
    container : {
        backgroundColor: colors.white ,
    }
})

export default AccountScreen;