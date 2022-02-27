import React from 'react'
import { StyleSheet , View, Text } from 'react-native'

export default function complexity({name, notation}) {
    return (
        <View style={styles.ComplexityContainer}>

        <View style={styles.row}>
            <Text >{name}</Text>
            <Text>{notation}</Text>
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    ComplexityContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    row:{
    //    borderColor: 'black',
    //    borderWidth: 1,
       margin: 10,
       alignItems: 'center',
     
    }
})