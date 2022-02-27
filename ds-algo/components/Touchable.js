import React from 'react'
import { StyleSheet,View, Text, TouchableOpacity } from 'react-native'
import Paragraph from './Paragraph'
import SubHeading from './SubHeading'

export default function Touchable({para ,subHeading, navigateTo, navigation}) {
    return (
            <TouchableOpacity  style={styles.container} onPress={()=> navigation.navigate({navigateTo})}>
                    <SubHeading text={subHeading}/>
                    <Paragraph text={para}/>
            </TouchableOpacity>

        
    )
}

const styles = StyleSheet.create({
    container:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        marginBottom: 5,
        marginTop: 5,
        padding: 10,
        // backgroundColor:'#fff'
        // width: "95%"
    }
})