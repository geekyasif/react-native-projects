import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Heading({text}) {
    return (
        <View>
            <Text style={styles.heading}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading:{
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 15,
        marginTop: 20,
        fontWeight: '500',
        color: 'black'
    },
})