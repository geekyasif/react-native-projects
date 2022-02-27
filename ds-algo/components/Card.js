import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Paragraph from './Paragraph'
import SubHeading from './SubHeading'

export default function Card({title, text}) {
    return (
        <View style={styles.cardContainer}> 
            
            <View style={styles.cardBody}>
                <SubHeading text={title}/>
                <Paragraph text={text}/>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    cardContainer:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        
    }
})