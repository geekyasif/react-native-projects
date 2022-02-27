import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function DataStructureList({name, logoImage,id, description}) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{ uri: logoImage }}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 2,
        margin: 10,
        padding: 10,
        borderRadius: 5,

    },

    logo:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginRight: 10,
        width: 40,
        height: 40
    },

    titleContainer:{
        width: '85%',
    },

    title:{
        fontSize: 20,
        fontWeight: "700",
       color: "grey"
    },
    description:{
        color: 'grey',
        marginTop: 3,

    }
})