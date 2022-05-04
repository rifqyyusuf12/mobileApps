import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import AppListItem from '../components/AppListItem';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

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
        }
    }
]

function AccountScreen(props) {
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