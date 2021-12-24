import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,ScrollView,TextInput, onChangeText, Modal, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as yup from 'yup';


export default function ({navigation}) {
    const [review, setReview] = useState([
        {title: 'Persuit of Happiness', body: 'Amazing movie, very inspiring', rating:4,  key:'1'},
        {title: 'Game of Thrones', body: 'One of the best web series of all time', rating:5,  key:'2'},
        {title: 'Money Hiest', body: 'Very good movie', rating:3,  key:'3'},
        {title: 'The lord of the ring and the return of the king', body: 'fantastic movie amazing vfx', rating:5,  key:'4'},
        {title: 'The hitsman Bodyguard', body: 'Good Movie', rating:3,  key:'5'},
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    
    // funtion to validate the form using yup library
    const ReviewSchema = yup.object({
        title: yup.string().required().min(4),
        body: yup.string().required().min(10),
        rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1-5', (val)=>{
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
    })
    // fucntion to adding review 
    const addReview = (review) => {
        review.key = Math.random().toString();
        setReview((prevreview) => {
            return [review, ...prevreview]
        });
        setModalVisible(false)
    }
    return (
       
        <View>
              <Modal
                animationType="slide"
                visible={modalVisible}
              >
                <View style={styles.centeredView}>
                    <TouchableOpacity style={styles.closeModelContainer}>
                        <Ionicons name="close" size={24} color="black" onPress={() => {setModalVisible(false);}} />
                    </TouchableOpacity>
                    <View style={styles.modelForm}>
                        <Formik
                            initialValues={{ title: '', body: '', rating: ''}}
                            validationSchema={ReviewSchema}
                            onSubmit={(values, actions) => {
                                addReview(values)
                                actions.resetForm()
                            }}
                            >
                            {props => (
                                <View >
                                    <TextInput style={styles.input}
                                        onChangeText={props.handleChange('title')}
                                        placeholder="Movie Title"
                                        value={props.values.title}
                                        onBlur={props.handleBlur('title')}
                                    />
                                    <Text style={styles.formValidationError}>{props.errors.title}</Text>
                                    
                                    <TextInput style={styles.input}
                                        onChangeText={props.handleChange('body')}
                                        placeholder="Moview Review Detail"
                                        value={props.values.body}
                                        onBlur={props.handleBlur('body')}
                                    /> 
                                    <Text style={styles.formValidationError}>{props.errors.body}</Text>
                                    
                                    <TextInput style={styles.input}
                                        onChangeText={props.handleChange('rating')}
                                        placeholder="Movie Rating"
                                        value={props.values.rating}
                                        onBlur={props.handleBlur('rating')}
                                        keyboardType="numeric"
                                    />
                                    <Text style={styles.formValidationError}>{props.errors.rating}</Text>
                                    <Button title="submit" color="red" onPress={props.handleSubmit}/>
                                </View>
                            )}
                            </Formik>
                    </View>
                </View>
            </Modal>

            <View style={styles.addModalContainer}>
            <TouchableOpacity>
                <Ionicons style={styles.addModal}name="add" size={24} color="black" onPress={() => { setModalVisible(true);}} />
            </TouchableOpacity>
            <Text>Add Movie Review</Text>
            </View>
            
            <FlatList
                data={review}
                renderItem = {({item})=>(
                    <TouchableOpacity  onPress={()=> navigation.navigate('Review Details', item)}>
                        <Text style={styles.item}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 10,
        margin:10,
        borderColor : '#bbb',
        borderStyle: 'dashed',
        borderWidth: 1
    },

    addModalContainer:{
        margin: 20,
        justifyContent: 'center',
        alignItems:'center',
      
    },

    addModal:{
        borderColor: '#bbb',
        borderWidth: 1,
        paddingLeft: 5,
        color: 'red',
        marginBottom: 10
    },

    centeredView:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },

    closeModelContainer:{
        borderColor: '#bbb',
        borderWidth: 1,
        padding: 4,
        color: 'red',
        marginBottom: 40
    },
    //   input 
    input: {
        padding: 5,
        width: 300,
        marginBottom: 10,
        borderColor: '#bbb',
        borderWidth: 1
      },

    submitFormBtn:{
        color: 'red',
        width: 300,
        marginTop: 10,
      },

      formValidationError:{
            marginBottom: 10,
            marginTop: 5,
            color: 'crimson',
            textAlign: 'center',
            fontWeight: 'bold',

      }
})
