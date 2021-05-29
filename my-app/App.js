import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, FlatList, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import Footer from './components/footer'


export default function App() {
  const [Todos, setTodos] = useState([
    {text: "I have to complete my project today", key : 3},
    {text: "Go to market and buy some snacks", key : 2},
    {text: "There is a meeting today at 2 o'clock", key : 1},
    {text: "Today is the last date for submiting project of java", key : 4},
    {text: "Operating system test tomorrow", key : 5},
    {text: "This is app is looking great ", key : 6},

  ]);
  
  const updateName = () => {
    setName('Mohammad Asif');
  };

  const deleteItem = (key) =>{
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };


  const addTodos = (Text) =>{
    if (Text.length > 0){
      setTodos((prevTodos) => { 
        return [
        {text : Text, key: Math.random()},
        ...prevTodos,
        ]
      });
    }else{
      Alert.alert("OOPS!", "Todo can not be empty", [
        {text: "close", onPress: () => console.log("OK Pressed") }
      ])
    }; 
   
  };

  return (
    <TouchableWithoutFeedback
          onPress={()=>{
        Keyboard.dismiss()
      }}
    >
      <View style={styles.container}>
        <StatusBar
            backgroundColor = "#EC7063"  
            barStyle = "dark-content"  
            translucent = {true}  
        />  
      <Header/>
     <View style={styles.mainContainer}>
      {/* todoform here */}
      <View style={styles.todoContainer}>
          <AddTodo addTodos={addTodos}/>
        </View>
        {/* todoItems here */}
        <View style={styles.todoItems}>
          <FlatList
            data={Todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={deleteItem}/>
            )}
          />
        </View>
     </View>

     <Footer/>
    </View>
    </TouchableWithoutFeedback>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  mainContainer:{
    flex: 1,
    padding: 20,

  },

  todoContainer:{
    marginBottom : 20,
  },

  todoItems:{
    flex: 1,
 
  },

  inputText:{
    borderBottomWidth:1,
    borderBottomColor: 'black',
    width: 150,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  text:{
    color: 'red',
    backgroundColor: 'yellow',
    padding: 30,
    fontSize: 20,
  },

  btnContainer:{
   marginTop: 10,
  },

});

