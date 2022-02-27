// import { Header } from '@react-navigation/stack'
import React, { useLayoutEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import SubHeading from '../../components/SubHeading'
import Touchable from '../../components/Touchable'
import Card from '../../components/Card'
export default function dsIntro({navigation}) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Data Structure And Algorithm"
            
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}  >
            <ScrollView showsVerticalScrollIndicator={false}>

            <Heading text="Intro To Data Structure"/>

            <Paragraph text="A data structure is a model where data is organized, managed and stored in a format that enables efficient access and modification of data. There are various types of data structures commonly available. It is up to the programmer to choose which data structure to use depending on the data." />
            
            <Paragraph text="Different forms of data may require different types of data structure."/>

            <Paragraph text="A program built using improper data structures will be therefore inefficient or unnecessarily complex. It is necessary to have a good knowledge of data structures and understand where to use the best one. The study includes the description, implementation and quantitative performance analysis of the data structure."/>


            <Heading text="Common Operations in a Data Structure"/>
            <Paragraph text="A data structure is only useful when you can perform operations on it, right? These are the basic operations that should be able to be performed on every data structure."/>

            <SubHeading text="Access"/>
            <Paragraph text="This operation handles how the elements currently stored in the structure can be accessed."/>


            <SubHeading text="Search"/>
            <Paragraph text="This operation handles finding the location of a given element of a given structure."/>


            <SubHeading text="Insertion"/>
            <Paragraph text="This operation specifies how new elements are to be added to the structure."/>

            
            <SubHeading text="Deletion"/>
            <Paragraph text="This operation specifies how existing elements can be removed from the structure."/>
            

            <Heading text="Classification of data structure"/>
            <Paragraph text="A data structure can be broadly classified into 2 types:"/>

            <SubHeading text="Linear Data Structure"/>
            <Paragraph text="A linear data structure’s elements form a sequence. Every element in the structure has some element before and after it. Examples of linear structures are:"/>

            {/* <Touchable navigateTo="Array" subHeading="Arrays" para="An array holds a fixed number of similar elements that are stored under one name. These elements are stored in contagious memory locations . The elements of an array can be accessed using one identifier. Read about arrays." /> */}

            <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate('Array')}>                
                <SubHeading text="Array" />
                <Paragraph text="An array holds a fixed number of similar elements that are stored under one name. These elements are stored in contagious memory locations . The elements of an array can be accessed using one identifier. Read about arrays."/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableContainer}>
                <SubHeading text="Linked Lists"/>
                <Paragraph text="A linked list is a linear data structure where each element is a separate object, known as a node . Each node contains some data and points to the next node in the structure, forming a sequence . Read about linked lists ."/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableContainer}>
                <SubHeading text="Stacks"/>
                <Paragraph text="Stacks are a type of linear data structures that store data in an order known as the Last In First Out (LIFO)  order. This property is helpful in certain programming cases where the data needs to be ordered. Read about stacks."/>
            </TouchableOpacity>


            <TouchableOpacity style={styles.touchableContainer}>
                <SubHeading text="Queues"/>
                <Paragraph text="Queues are a type of linear data structures that store data in an order known as the First In First Out (FIFO)  order. This property is helpful in certain programming cases where the data needs to be ordered. Read about queues."/>
            </TouchableOpacity>



            <Heading text="Non-Linear Data Structures"/>
            <Paragraph text="A non-linear data structure’s elements do not form a sequence. Every element may not have a unique element before and after it."/>


            <TouchableOpacity style={styles.touchableContainer}>
                <SubHeading text="Trees"/>
                <Paragraph text="A tree is a data structure that simulates a hierarchical tree, with a root value and the children as the subtrees, represented by a set of linked nodes. Read about trees."/>
            </TouchableOpacity>

            
            <TouchableOpacity style={styles.touchableContainer}>
                <SubHeading text="Graphs"/>
                <Paragraph text="A graph data structure is used to represent relations between pairs of objects. It consists of nodes (known as vertices) that are connected through links (known as edges). The relationship between the nodes can be used to model the relation between the objects in the graph. Read about graphs ."/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableContainer}>
                <SubHeading text="Hash Tables"/>
                <Paragraph text="A Hash Table is a data structure where data is stored in an associative manner. The data is mapped to array positions by a hash function that generates a unique value from each key. The value stored in a hash table can then be searched in O(1) time using the same hash function which generates an address from the key. Read about hash tables."/>
            </TouchableOpacity>


            <TouchableOpacity style={styles.touchableContainer}>
                <SubHeading text="Heaps"/>
                <Paragraph text="A heap is a specialized tree-based data structure that satisfies the heap property. Read about heaps."/>
            </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // marginLeft: 10,
        // marginRight: 10,
        // padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        // marginBottom: 10,
        backgroundColor : 'white'
        
       
    },

    touchableContainer:{

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 4,
        borderRadius: 5,
        marginBottom: 8,
        marginTop: 10,
        margin: 1,
        padding: 8 ,
        backgroundColor: 'white'
        
    }

})