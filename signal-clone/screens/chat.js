import React from 'react'
import { StyleSheet, View, Text, Image ,TouchableOpacity} from 'react-native'

export default function chat({id, chatName, enterChat, navigation}) {
    return (
        <TouchableOpacity style={styles.mainChatContainer} key={id} onPress={()=> enterChat(id, chatName)}>

            <View style={styles.row}>
                <View style={styles.avatarContainer}>
                    <Image 
                        style={styles.avatar}
                        source={require('../assets/b.jpg')}
                    />
                </View>
                <View style={styles.chatContainer}>
                    <Text style={styles.title}>{chatName}</Text>
                    {/* <View style={styles.chatContainer}> */}
                        <Text style={styles.chat}>acbc</Text>
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
