import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import {
    AppForm,
    AppFormField as FormField,
    AppFormPicker as Picker,
    SubmitButton,
} from '../components/forms'
import Screen from '../components/Screen'
import CategoryPickerItem from '../components/CategoryPickerItem'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category')
});

const categories = [
    { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'lamp' },
    { label: 'Cars', value: 2, backgroundColor: 'orange', icon: 'car' },
    { label: 'Cameras', value: 3, backgroundColor: 'yellow', icon: 'camera' },
    { label: 'Games', value: 4, backgroundColor: 'green', icon: 'football' },
    { label: 'Clothing', value: 5, backgroundColor: 'orange', icon: 'eye' },
    { label: 'Sport', value: 6, backgroundColor: 'blue', icon: 'basketball' },
    { label: 'Movie & Music', value: 7, backgroundColor: 'green', icon: 'music' },
    { label: 'Books', value: 8, backgroundColor: 'purple', icon: 'book' },
    { label: 'Others', value: 9, backgroundColor: 'grey', icon: 'tablet' },
];

function ListingEditScreen() {
    return (
        <Screen style={styles.container} >
            <AppForm 
                initialValues={{
                    title: '',
                    price:'',
                    description: '',
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormField maxLength={255} name='title' placeholder='Title'/>
                <FormField 
                    keyboardType='numeric'
                    maxLength={8} 
                    name='price'
                    placeholder='Price'
                    width={120}
                />
                <Picker 
                    items={categories}
                    name='category'
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder='Category'
                    width='50%'
                />
                <FormField 
                    maxLength={225}
                    multiline 
                    name='description'
                    numberOfLines={3}
                    placeholder='Description'
                />
                <SubmitButton 
                title='Post' 
                onPress={() => console.log('masuk')}
                />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default ListingEditScreen;