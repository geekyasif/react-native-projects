import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function articles({title, img , name, desc, published} ) {
    
    return (
        <View style={styles.container}>
            <View style={styles.newsContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.row}>
                    <Text style={styles.description}>{desc}</Text>
                </View>
                <Image style={styles.image} source={{uri: img}}/>
                <Text style={styles.author}>{name}</Text>
                <Text style={styles.date}>{published}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        width : '100%',
    },

    newsContainer:{
        backgroundColor :"white",
        padding:10,
        borderRadius: 8,

    },
    title:{
        fontSize: 15,
        fontWeight: "700"
    },
    row:{
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
    },
    description:{
        color: 'gray'
    },
    image:{
        backgroundColor: 'grey',
        width: "100%",
        height: 150,
    },
    author:{
        fontWeight: '500',
        marginTop: 5,
        marginBottom: 5,
    },
    date:{
        fontWeight: '500',
    }
})