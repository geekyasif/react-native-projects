import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function todoItem({item, pressHandler}) {
    return (
        <TouchableOpacity  onPress= {() => pressHandler(item.key)}>
            <Text style={styles.item}><MaterialIcons style={styles.deleteBtn} name="delete" size={15} color="#E74C3C" />{item.text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item:{
        borderColor : '#bbb',
        color: 'black',
        padding: 10, 
        borderStyle : "dashed",
        borderRadius : 10,
        margin: 5,
        borderWidth : 1,
        
    },
    deleteBtn:{
        marginRight: 10,
    }


});