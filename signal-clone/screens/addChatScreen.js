import React, {useState, useLayoutEffect} from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import { Button } from 'react-native';
import { Input } from 'react-native-elements';
import { db } from '../firebase';

export default function addChat({navigation}) {
    const [input, setInput] = useState('')
    
    
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add A New Chat",
            headerStyle : {backgroundColor: '#fff'},
            headerTitleStyle: {color: 'black'},
            headerTintColor: 'black',
        })
    }, [])


    const createChat = async ()=>{
        await db.collection('chats').add({
            chatName: input
        }).then( () => {
            navigation.goBack()
        }).catch((error)=> alert(error))
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            
            <Input
                style={styles.addChatInput}
                placeholder="Enter a chat name"
                value={input}
                onChangeText={(text)=> setInput(text)}
                onSubmitEditing={createChat}
                leftIcon={
                    <Entypo style={{marginRight: 5}}name="chat" size={24} color="black" />   
                }
            />
            </View>
            <Button  color='#2C6BED' onPress={createChat} title="Create a new chat"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 300,
    },
    inputContainer:{
        width: 300,
        flexDirection: 'row'
    },
    addChatInput:{
        fontSize: 20
    },

    creatChatbtn:{
    }



})