import React from 'react'
import {StyleSheet, View, Text } from 'react-native'
import { Entypo, FontAwesome, Ionicons, Fontisto } from '@expo/vector-icons'; 


export default function dataCenters({item}) {
    return (
        <View style={styles.container} >
             <View style={styles.row}>
                <Entypo name="squared-plus" size={24} color="#28B463" />
                <Text style={styles.hospital}>{item.name}</Text>
             </View>
             <View style={styles.row}>
                <FontAwesome name="map-marker" size={24} color="#C0392B" />
                <Text style={styles.address}>{item.address}, {item.district_name}, {item.state_name}</Text>
             </View>
             <View style={styles.row}>
                <Ionicons name="ios-time-outline" size={24} color="#2E86C1" />
                <Text style={styles.time}>From :- {item.from}  To :- {item.to}</Text>
             </View>
            <View style={styles.row}>
            <Fontisto name="injection-syringe" size={24} color="#F1C40F" />
                <Text style={styles.vaccine}>{item.sessions[0].vaccine}</Text>
                <Text style={styles.charge}>{item.sessions[0].fee_type}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.age}>Age Limit: {item.sessions[0].min_age_limit}</Text>
                <Text style={styles.availablity}>Availablity: {item.sessions[0].available_capacity}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FDFEFE',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        padding: 10,
        marginBottom: 20
    },

    row:{
        flexDirection: 'row',
        marginBottom: 10
      
    },

    hospital:{
        fontSize: 17,
        marginLeft: 10
    },

    address:{
        fontSize: 15,
        marginLeft: 20
    },

    time:{
        fontSize: 15,
        marginLeft: 10
    },
    vaccine:{
        fontSize: 15,
        marginLeft: 10
    },
    charge:{
        fontSize: 15,
        marginLeft: 180
    },
    age:{
        marginLeft: 35,
        fontSize: 15,
    },
    availablity:{
        marginLeft: 120,
        fontSize: 15,
    }



})