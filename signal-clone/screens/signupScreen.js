import React,{useLayoutEffect,useState } from 'react'
import { StyleSheet, Image, View, Text, KeyboardAvoidingView, TextInput,Button } from 'react-native'
import {db, auth } from '../firebase'
import defaultAvatar from '../assets/avatar.png'

export default function loginScreen({navigation}) {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [ImageUrl, setImageUrl] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle:"Back to Login",
        })
    }, [navigation])

    
    // creating funtion for registering user with firebase
    const signup = () =>{
            auth.createUserWithEmailAndPassword(Email, Password)
            .then((authUser)=>{
                authUser.user.updateProfile({
                    displayName :  Name,
                    photoURL: ImageUrl || defaultAvatar
                })
            })
            .catch((error)=> alert(error.message));
    }


    return (
        <KeyboardAvoidingView style={styles.container}>
            {/* <Image
                source={require('../assets/signalogo.png')}
                style={{ width: 150, height: 150}}
            /> */}

            <View style={styles.createAccountContainer}>
                <Text style={styles.createAccountTitle}>Create a Signal Account</Text>
            </View>

            <View style={styles.loginFormContainer}>
                <View style={styles.inputContainer}>
                    <TextInput  style={styles.textInput}
                        placeholder="Full Name"
                        autoFocus
                        type="text"
                        value={Name}
                        onChangeText={(text) => setName(text)}
            
                    />
                    <TextInput  style={styles.textInput}
                        placeholder="Email"
                        autoFocus
                        type="email"
                        value={Email}
                        onChangeText={(text) => setEmail(text)}
            
                    />      
                    
                    <TextInput 
                    style={styles.textInput}
                        placeholder="Password"
                        autoFocus
                        type="password"
                        secureTextEntry={true}
                        value={Password}
                        onChangeText={(text) => setPassword(text)}
                    />

                    <TextInput  
                       style={styles.textInput}
                        placeholder="Profile Picture Url (Optional)"
                        autoFocus
                        type="text"
                        value={ImageUrl}
                        onChangeText={(text) => setImageUrl(text)}
                        onSubmitEditing={signup}
            
                    />
                </View>
                <View style={styles.btnContainer}>
                    <Button raised style={styles.button} color="#2C6BED" title="Singup" onPress={signup}/>
                    {/* onPress={()=> navigation.navigate('Login')} */}
                </View>
               
            </View>
        </KeyboardAvoidingView>
    )
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    createAccountContainer: {
        marginBottom: 30
    },

    createAccountTitle:{
        fontSize: 33,
    },

    loginFormContainer:{

    },

    inputContainer:{
        width: 300,
     },

     textInput:{
        paddingTop: 10,
        marginTop: 10,
        marginBottom: 10,
        borderColor: 'black',
        // borderWidth: 1,
        borderBottomWidth: 1,

     },

    btnContainer:{
        marginTop: 10
    },

    button:{
        marginBottom: 10,
        marginTop: 10
    }

    

})