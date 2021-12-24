import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, Image ,TouchableOpacity} from 'react-native'
import { db } from '../firebase';


export default function chat({id, chatName, route, enterChat}) {
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        const unsubscribe = db.collection('chats')
        .doc(id)
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
        <TouchableOpacity 
            style={styles.mainChatContainer} 
            key={id} 
            onPress={()=> enterChat(id, chatName)}>

            <View style={styles.row}>
                <View style={styles.avatarContainer}>
                    <Image 
                        style={styles.avatar}
                        source={{
                            uri: messages[0]?.data.photoURL || "https://www.pinclipart.com/picdir/middle/148-1486972_mystery-man-avatar-circle-clipart.png"
                        }}
                    />
                </View>
                <View style={styles.chatContainer}>
                    <Text style={styles.title}>{chatName}</Text>
                    {/* <View style={styles.chatContainer}> */}
                        <Text  style={styles.chat}>{messages?.[0]?.displayName}: {messages?.[0]?.message}</Text>
                    {/* </View> */}
                </View>
            </View>
          
        {/* </View> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainChatContainer:{
        margin: 10,
        
    },
    row:{
        flexDirection: 'row',
    },

    avatar:{
        width:50,
        height:50,
        borderRadius: 40
    },

    chatContainer:{
        marginTop: 4,
        marginLeft: 10,
        marginRight: 10,
    },
    title:{
        fontSize: 17,
        // fontWeight: 'bold'
        fontWeight: '600'
    },
    chat:{
        color:'gray',
        overflow: 'hidden',
    }
})
