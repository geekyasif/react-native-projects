import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Paragraph({text}) {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color: '#7B7D7D',
        fontSize: 15
    }
})
