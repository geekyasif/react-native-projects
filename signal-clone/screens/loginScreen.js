import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Button, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import {auth} from '../firebase';

export default function loginScreen({navigation}) {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser){
                navigation.replace("Home");
            } 
        })

        return unsubscribe;
    }, [])

    const login = () =>{
        auth.signInWithEmailAndPassword(Email, Password)
        .catch((error) => alert(error))
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image
                source={require('../assets/signalogo.png')}
                style={{ width: 150, height: 150}}
            />


            <View style={styles.loginFormContainer}>
                <View style={styles.inputContainer}>
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
                        onSubmitEditing={login}
                    />

                </View>
                <View style={styles.btnContainer}>
                    <Button style={styles.button}  color="#2C6BED" title="Login" style={{color:'red'}} onPress={login}/>
                </View>
                <View style={styles.btnContainer}>
                    <Button  style={styles.button} color="#2C6BED" title="Singup" onPress={()=> navigation.navigate('Signup')}/>
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