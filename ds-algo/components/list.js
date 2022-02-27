import React from 'react'
import {StyleSheet, View, Text } from 'react-native'
import Paragraph from '../components/Paragraph'

export default function list({number, text}) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{number} :- <Paragraph text={text}/></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 5
    },
    number:{
        fontWeight: 'bold'
    }
})
