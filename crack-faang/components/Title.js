import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Title({name, enterPrograms}) {
    return (
        <View>
            <TouchableOpacity  style={styles.container} onPress={ () => { navigation.navigate('QuestionScreen', item)} }>
               <Text style={styles.text} >{name}</Text>
               </TouchableOpacity>
        </View>
    )
}


const styles= StyleSheet.create({
    container:{
      justifyContent: 'center',
      alignItems: 'center',
      

    },
    text:{
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '80%',
        margin: 10,
        // height: 60,
        padding: 20,
        textAlign: 'center'
    }
})
