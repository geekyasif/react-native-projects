import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import {db} from '../firebase'

export default function QuestionSceen({route, navigation }) {
            const [programs, setPrograms] = useState([])
               
                const name = route.params.name
                
    //   getting a specific category data
        useEffect( () => {
            const unsubscribe = db.collection('dataStructure').where('name', "==" , `${name}`).get().then((querySnapshot) => (
                setPrograms(querySnapshot.docs.map((doc) =>({
                        id: doc.id,
                        data : doc.data()
                    })))
                ))
            return unsubscribe
        }, [])



    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
       
        <FlatList
            data={programs}
            renderItem = {({item})=>(
                <TouchableOpacity  style={styles.titleContainer}  onPress={ () => { navigation.navigate('SolutionScreen', item)} }>
                     <Text  style={styles.title}  id={item.data.id} key={item.data.id}>{item.data.program}</Text>
                </TouchableOpacity>
            )}
        />

       </ScrollView> 
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({  
    container:{
        flex: 100,
        backgroundColor: 'white',
    },
    
    titleContainer:{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 20,
        
  
      },
      text:{
         
        //   width: '80%',
        //   margin: 10,
          // height: 60,
     
          textAlign: 'center'
      }

})