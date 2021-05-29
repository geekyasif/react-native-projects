import React from 'react'
import { StyleSheet, View, Text} from 'react-native';

export default function footer() {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Geeky Asif</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer:{
        display: 'flex',
        justifyContent : 'flex-end',
        alignItems: 'center',
        overflow: 'hidden'
    },

    footerText:{
        textAlign:"center",
        padding: 8,
        color: '#bbb',
        fontWeight: '500'
    }
 
})
