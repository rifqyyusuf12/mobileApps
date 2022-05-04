import React, { useState } from 'react';
import { FlatList, StyleSheet, Platform, StatusBar, View } from 'react-native'
import Constants from 'expo-constants';

import AppListItem from '../components/AppListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';


const initialMessages = [
    {
        id: 1,
        title: 'Rifqy Yusuf',
        description: 'loremadkasmdkasmdkamskdmaksmdkamskdmkasd kasmdkamskdmkasmdk amskdm kasmd kmkasmdkamskdmaksmdkasmdkamsk dmaskm dkasmdkasmdkaq kdosako saokd oaskdo ksao  kdoaskd oask',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        //delete message from messages
        setMessages(messages.filter( m => m.id !== message.id))
    }

    return (
        <Screen >
        <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => 
        <AppListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => <ListItemDeleteAction onPress={()=>handleDelete(item)} />}
        /> }
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
            setMessages([
                {
                    id: 2,
                    title: 'T2',
                    description: 'D2',
                    image: require('../assets/mosh.jpg')
                },
            ])
        }}
        />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;