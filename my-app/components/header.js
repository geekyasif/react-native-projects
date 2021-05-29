import React from 'react'
import { StyleSheet, Text, View} from 'react-native';

export default function header() {
    return (
       <View style={styles.headerContainer}>
           <Text style={styles.headerText}>Quick Todos</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor: '#E74C3C',
        paddingTop: 35,
        paddingBottom : 15,
        paddingLeft: 10,
        borderColor: 'black',
    },

    headerText:{
        color:'white',
        fontSize: 20,
        fontWeight : '700'
    }
});
