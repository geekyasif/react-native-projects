import React, {useLayoutEffect, useState } from 'react'
import { FlatList, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import DataStructureList from '../components/DataStructureList'


export default function HomeScreen({ navigation }) {


    const [name, setName] = useState([
        { 
            id: 1, 
            name: 'Bit Manupulation', 
            description: "Bit manipulation is the act of algorithmically manipulating bits or other pieces of data shorter than a word.",
            logoImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaoMRUkM4Nt1Zn5_SoaZkarxLSevc5QAQhqusgb8uodZllNn9AADskluuD4d5HWlTCGA&usqp=CAU" 
        
        },
        { 
            id: 2, 
            name: 'Array', 
            description: "An array is a data structure that contains a group of elements. Typically these elements are all of the same data type.",
            logoImage: "https://www.interviewcake.com/images/svgs/array__preview.svg?bust=209"  
        },
        { 
            id: 3, 
            name: 'Linkde list', 
            description: "A linked list is a collection of nodes where each node is connected to the next node through a pointer.",
            logoImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Simpleicons_Interface_link-symbol.svg/1024px-Simpleicons_Interface_link-symbol.svg.png" 
        },
        { 
            id: 4, 
            name: 'Stack and Queue', 
            description: "Both the stack and queue are the linear data structure, which means that the elements are stored sequentially and accessed in a single run.",
            logoImage: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F183%2F850%2Fpng-transparent-graph-database-ibm-gremlin-graph-data-infinitegraph-line.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-nmzih&tbnid=ZGUThUS30f_jqM&vet=10CHsQMyifAWoXChMImKLfwqaf8QIVAAAAAB0AAAAAEAI..i&docid=pVzFngybsgbfXM&w=920&h=590&itg=1&q=data%20structure%20logo%20png&hl=en&ved=0CHsQMyifAWoXChMImKLfwqaf8QIVAAAAAB0AAAAAEAI" 
        },
        { 
            id: 5, 
            name: 'Tree', 
            description: "A tree is a hierarchical data structure defined as a collection of nodes.",
            logoImage: "https://image.flaticon.com/icons/png/512/1953/1953355.png" 
        },
        { 
            id: 6, 
            name: 'Graph', 
            description: "A Graph is a non-linear data structure consisting of nodes and edges.",
            logoImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Directed.svg/1200px-Directed.svg.png" 
        },

        { 
            id: 7, 
            name: 'Heap', 
            description: "A Heap is a special Tree-based data structure in which the tree is a complete binary tree.",
            logoImage: "https://image.flaticon.com/icons/png/512/1953/1953355.png" 
        },
        { 
            id: 8, 
            name: 'Backtracking', 
            description: "Backtracking is an algorithmic-technique for solving problems recursively.",
            logoImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Backtracking-with-backjumping.svg/2276px-Backtracking-with-backjumping.svg.png" 
        },
        { 
            id: 9, 
            name: 'Dynamic Programming', 
            description: "Dynamic Programmingis an algorithmic technique for solving an optimization problem by breaking it down into simpler subproblems.",
            logoImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Fibonacci_dynamic_programming.svg/557px-Fibonacci_dynamic_programming.svg.png" 
        },
        { 
            id: 10, 
            name: 'Trie', 
            description: "A trie, also called digital tree or prefix tree, is a type of search tree, a tree data structure used for locating specific keys from within a set.",
            logoImage: "https://www.interviewcake.com/images/svgs/trie_with_four_strings.svg?bust=209" 
        },
        { 
            id: 11, 
            name: 'Searching', 
            description: "A search algorithm is the step-by-step procedure used to locate specific data among a collection of data.",
            logoImage: "http://simpleicon.com/wp-content/uploads/active-search.svg" 
         },
        { 
            id: 12, 
            name: 'Sorting', 
            description: "A sorting algorithm is a method for reorganizing a large number of items into a specific order.",
            logoImage: "https://www.pngfind.com/pngs/m/495-4952598_png-file-svg-sort-by-icon-png-transparent.png" 
        },
    ])



    
    // function to customize the header
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Data Structure And Algorithms',
            // headerStyle : {backgroundColor: 'black'},
            // headerTitleStyle: {color: 'black'},
            // headerTintColor: 'black',
         
        })
    }, [navigation]);




    return (

        <SafeAreaView style={styles.container}>

                <FlatList
                    data={name}
                    renderItem={({ item }) => (
                        <TouchableOpacity  onPress={() => { navigation.navigate('QuestionScreen', item) }}>
                            <DataStructureList name={item.name} key={item.id} id={item.id} logoImage={item.logoImage} description={item.description} />
                        </TouchableOpacity>
                    )}
                />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor: 'white'
    },

    // titleContainer: {
    //     backgroundColor: 'white',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     margin: 10,
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.84,
    //     elevation: 5,
    //     padding: 20,


    // },
    // text: {

    //     //   width: '80%',
    //     //   margin: 10,
    //     // height: 60,

    //     textAlign: 'center'
    // }

})