import React, {useState}  from 'react'
import { StyleSheet, FlatList, View, Text ,StatusBar} from 'react-native'



export default function caseData({item}) {


    return (
            <View style={styles.container}>
                <View style={styles.stateNameContainer}>
                    <Text style={styles.countryName}>{item.state === 'Total' ? 'India' : item.state}</Text>
                </View>
                <View style={styles.dataContainer}>
                        <View style={styles.row}>
                            <Text style={styles.title}>Active</Text>
                            <Text style={styles.cases}>{item.active}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.title}>Recovered</Text>
                            <Text style={styles.recovered}>{item.recovered}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.title}>Deaths</Text>
                            <Text style={styles.death}>{item.deaths}</Text>
                        </View>
                    </View>
            </View>

    )
}


const styles = StyleSheet.create({
    container:{
        
    },

    stateNameContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },  
    
    dataContainer:{
    //     // width: '97%',
        flexDirection: 'row',
        backgroundColor: '#FDFEFE',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
                
    },

    countryName:{
            marginTop: 15,
            marginBottom: 20,
            fontSize: 20,
    },



    row:{
        margin: 15,
        alignItems: 'center'
    },

    title:{
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },

    cases:{
        color: '#3498DB'
    },
    recovered:{
        color: '#F4D03F'
    },
    death:{
        color: '#E74C3C'
    },

})