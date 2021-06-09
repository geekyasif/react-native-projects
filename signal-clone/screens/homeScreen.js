import React, {useLayoutEffect, useEffect,useState} from 'react'
import {SafeAreaView, FlatList, TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import { EvilIcons , Ionicons } from '@expo/vector-icons'; 
import Chat from './chat'
import {db, auth} from "../firebase"
import { ScrollView } from 'react-native';

export default function homeScreen({navigation}) {
    const [Chats , setChats] = useState([
    ])

    // getting all the chat data from database
    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot((snapshot) => (
            setChats(snapshot.docs.map((doc) =>({
                id: doc.id,
                data : doc.data()
            })))
        ))

        return unsubscribe
    }, [])


    // logout fucntion
    const logout = () =>{
        auth.signOut().then(()=>{
                navigation.replace("Login");
        });
    };

    // function to customize the header
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Signal',
            headerStyle : {backgroundColor: '#fff'},
            headerTitleStyle: {color: 'black'},
            headerTintColor: 'black',
            headerLeft: () => (
                <View style={{marginLeft: 15, marginTop:5}}>
                        <TouchableOpacity onPress={logout}>
                                <Image 
                                    style={styles.avatar}
                                    source={{uri: auth?.currentUser?.photoURL}}
                                 />
                        </TouchableOpacity>
                </View>
              ),

              headerRight: () => (
                <View 
                    style={{
                            marginLeft: 15, 
                            marginTop:5, 
                            flexDirection:'row',
                        }}                      
                >
                      <TouchableOpacity>
                        <EvilIcons style={styles.camera} name="camera" size={30} color="black" />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Ionicons style={styles.addChat} name="chatbox-outline" size={20} color="black" onPress={()=> navigation.navigate("addChat")} />
                      </TouchableOpacity>  
                </View>
              ),
              
         
        })
    }, [navigation]);

    const enterChat = (id, chatName) => {
        navigation.navigate('enterChat', {
            id: id, 
            chatName: chatName,
        });
    };

    return (
            <SafeAreaView >
                <ScrollView style={styles.container}>
                    {Chats.map(({ id, data: {chatName} })=>(
                                <Chat key={id} id={id} chatName={chatName}  enterChat={enterChat}/>
                        ))}
                </ScrollView>
            </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        height: '100%'
    },

    avatar:{
        width:40,
        height:40,
        borderRadius: 60
    },
    camera:{
        // marginBottom: 1,
        marginTop: 8,
        marginRight: 15
    },
    addChat:{
        marginBottom: 10,
        marginTop: 10,
        marginRight: 10

    }

    
})