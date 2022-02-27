import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function SubHeading({text}) {
    return (
        <View>
            <Text style={styles.subHeading}>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    subHeading:{
        fontSize:18,
        // margin: 10
        marginBottom: 5,
        marginTop: 15,
        
    },
})