import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function reviewDetails({route}) {
    
    const { title, body, rating } = route.params;

    return (
    <View style={styles.itemDetailContainer}>
            <View style={styles.item}>
                <Text style={styles.title} >{title}</Text>
                <Text style={styles.body} >{body}</Text>
                <Text style={styles.rating} >{rating}</Text>
            </View>
    </View>
    )
}

const styles = StyleSheet.create({
    itemDetailContainer:{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    item:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '50%',
        borderColor : '#bbb',
        borderStyle: 'dashed',
        borderWidth: 1,
        textAlign: 'center',
        padding: 10,
    },
    title:{
        fontSize: 25,
        marginBottom: 10
    },

    body:{
        fontSize: 15,
        marginBottom: 10

    },
    rating:{
        color: 'red',
    }
})
