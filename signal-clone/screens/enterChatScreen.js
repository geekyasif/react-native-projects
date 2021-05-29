import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { Feather, Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native';
import { Keyboard } from 'react-native';
import { db, auth } from '../firebase';
import * as firebase from "firebase"

export default function enterChat({navigation, route}) {
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerStyle:{backgroundColor:"white"},
            headerTitleStyle: {color:'black'},
            headerTintColor: 'black',
            headerTitle:()=>(
                <View 
                    style={{
                            flexDirection:'row',
                            alignItems:'center',
                    }}
                >
                    <Avatar
                        style={{ width: 30, height: 30, marginTop: 4}} 
                        rounded 
                        source={require('../assets/avatar.png')}
                    />
                    <Text 
                        style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            marginLeft: 10,
                            fontSize: 18,
                            marginRight: 40
                        }}
                    >
                        {route.params.chatName}
                    </Text>
                </View>
            ),
            headerRight:()=>(
                <View 
                    style={{
                        marginRight: 20,
                        flexDirection:'row'
                    }}
                >
                    <TouchableOpacity>
                        <Feather style={{marginRight: 15}} name="video" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather style={{marginTop: 3}} name="phone" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            )
        })
    },[])

    const sendMessage = () =>{
            Keyboard.dismiss()
            db.collection('chats').doc(route.params.id).collection('messages').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                displayName: auth.currentUser.displayName,
                email: auth.currentUser.email,
                photoURL: auth.currentUser.photoURL

            })
            setInput('')
    }

    useLayoutEffect(()=>{
        const unsubscribe = db.collection('chats')
        .doc(route.params.id)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => setMessages(
            snapshot.docs.map(doc =>({
                    id: doc.id,
                    data: doc.data()
            }))
        ))
        return unsubscribe
    },[route])


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <ScrollView>
                    {/* all chats are displaying here */}
                        {messages.map(({id, data})=>(
                                data.email === auth.currentUser.email ? (
                                    <View key={id} style={styles.recieverContainer}>
                                        <Avatar
                                        containerStyle={{
                                            position:'absolute',
                                            bottom:-20,
                                            right: -5,

                                        }}
                                           // web view
                                            position="absolute"
                                            rounded
                                            right={-5}
                                            size={30}
                                            source={{
                                                uri: data.photoURL
                                            }}
                                        />
                                        <Text style={styles.recieverText}>{data.message}</Text>
                                    </View>
                                ):
                                (
                                    <View style={styles.senderContainer}>
                                        <Avatar
                                            containerStyle={{
                                                position:'absolute',
                                                bottom:-20,
                                                right: -5,

                                            }}
                                            // web view
                                                position="absolute"
                                                rounded
                                                right={-5}
                                                size={30}
                                                source={{
                                                    uri: data.photoURL
                                                }}
                                        />
                                        <Text style={styles.senderText}>{data.message}</Text>
                                    </View>
                                )
                        ))}
                </ScrollView>
            <View style={styles.footer}>
                    <TextInput 
                        placeholder="Signal Message"
                        value={input}
                        onChangeText={text => setInput(text)}
                        style = {styles.textInput}
                        onSubmitEditing={sendMessage}
                    />
                    <TouchableOpacity
                        onPress={sendMessage}
                        activeOpacity={0.5}
                    >
                        <Ionicons style={styles.sendBtn} name="send" size={30} color="white" />

                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    footer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 15
    },
    textInput:{
        flex: 1,
        borderColor: 'transparent',
        backgroundColor: '#ECECEC',
        borderRadius: 30,
        borderWidth: 1,
        padding: 10,
        color: 'black',
        marginRight: 15,
        // height: 40,
    },
    sendBtn:{
        backgroundColor: '#2B68E6',
        borderRadius:30,
        padding: 4
    },

    recieverContainer:{
        backgroundColor: '#2B68E6',
        borderRadius: 20,
        padding: 15,
        position: 'relative',
        maxWidth: '80%',
        marginRight: 15,
        marginBottom: 20,
        alignSelf: 'flex-end',
        marginTop: 13

    },

    recieverText:{
        color: 'white',
        fontWeight: '500',
        marginLeft: 10,
        marginBottom: 15
    },

    senderContainer:{
        backgroundColor: '#2B68E6',
        borderRadius: 20,
        padding: 15,
        position: 'relative',
        maxWidth: '80%',
        marginRight: 15,
        marginBottom: 20,
        alignSelf: 'flex-end',
        marginTop: 13
    },
})
