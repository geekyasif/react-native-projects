import React, {useState} from 'react'
import { StyleSheet, View, Button, TextInput} from 'react-native';

export default function addTodo({addTodos}) {
    const [Text, setText] = useState('');

    const inputVal = (val) =>{
        setText(val)
    }
    return (
        <View>
            <TextInput
                style={styles.inputText}
                placeholder= "Add Todos..."
                onChangeText = {inputVal}
            />
            <Button 
                style={styles.addBtn} 
                onPress={()=> addTodos(Text)} 
                title="Add Todo"
                color="#E74C3C"
            />
        </View>
    )
}


const styles = StyleSheet.create({


    inputText:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        fontSize: 15,
        marginBottom: 10
    },



});
