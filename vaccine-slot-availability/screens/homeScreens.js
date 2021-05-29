import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, View, Button, Text, ImageBackground } from 'react-native'
import {Input } from 'react-native-elements';


export default function homeScreens({navigation}) {
    const [pincode, setPincode] = useState('')
    const [date, setdate] = useState('')
    console.log(pincode)
    console.log(date)
    const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`
    console.log(url)
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "COVID-19 Vaccination Availability"
        })
    }, [])

    return (
        <View style={styles.homeContainer}>
            <ImageBackground source={require("../assets/bg6.jpg")} style={styles.image}/>
                <View style={styles.formContainer}>
                    <Input style={styles.input}
                        placeholder='Enter Pin-Code (12335)'
                        value={pincode}
                        onChangeText={(text) => setPincode(text)}
                        keyboardType='numeric'
                    />
                    <Input style={styles.input}
                        placeholder='Enter Date (DD-MM-YY)'
                        value={date}
                        onChangeText={(text) => setdate(text)}
                        keyboardType='numeric'
                    />
                    <Button
                        title="Cheack Availability"
                        // color="#1ABC9C"
                        color="#17A589"
                        onPress={()=> navigation.navigate('Data', {url: url})}
                        />

                   
                </View>
     
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
        opacity: 0.3

        
      },
      formContainer:{
        position: 'absolute',
        width: "80%",
      },

})