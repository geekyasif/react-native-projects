import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle} >Live Covid Tracker</Text>
        </View>
    )
}




const styles = StyleSheet.create({
    header:{
        paddingTop: 40,
        paddingBottom: 20,
        paddingLeft: 10,
        backgroundColor: 'green',
    },

    headerTitle:{
        
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    }
})