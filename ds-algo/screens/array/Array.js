import React, { useLayoutEffect } from 'react'
import { StyleSheet,View, Image, Text, ScrollView, SafeAreaView } from 'react-native'
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import SubHeading from '../../components/SubHeading'
import Complexity from '../../components/complexity'
import List from '../../components/list'

export default function Array({navigation}) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Array"
        })
    }, [])
    return (
        <SafeAreaView>
        <ScrollView style={styles.ArrayContainer} showsVerticalScrollIndicator={false}  >
            <Image style={{ width: "100%", height: 60, marginTop: 10, marginBottom:10,}} source={{uri : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Array1.svg/640px-Array1.svg.png" }} />

            <Paragraph text="An array holds a fixed number of similar elements that are stored under one name. These elements are stored in contagious memory locations. It is one of the simplest data structures. Most modern programming languages have arrays built-in by default." />

            <Heading text="Why use arrays over a bunch of variables?" />
            <Paragraph text="The reason why we use arrays is that every element can be accessed by its index value. This has several advantages over storing a bunch of variables.

                For example: Consider we have to implement a system to store the age of all employees in an office. There is the traditional way with variables.

                One can create a variable for each employee in the office. Let’s say the office has only 3 employees. Fairly easy right? Just declare 3 variables: emp1_age,emp2_age and emp3_age.

                When new recruitments come in, we sit down to create more variables. Maintaining a system like this gets tedious. Imagine one new employee and the whole system code has to be modified.

                Accessing each variable would also be a headache. It is stupid to sum 20 variables by hand to calculate the average age of the employees.

                An array data structure tries to solve these problems.

                One of the properties of arrays is that it holds the same kind of data under one name.

                For this example, the array can hold all the ages of the employees under one name, like employees_age. These are all of the integer type.

                The second property of arrays is that it stores each element in a continuous block which can be accessed using its index.

                Every employee’s age can be accessed by iterating through the indices of the array. This can be used to easily access all values serially by looping through them. The function to calculate average becomes much easier to implement as the name of the array is constant and only the index is changing."/>

                <SubHeading text="Properties of Array"/>
                
                <Heading text="Complexity of operation in Array" />
                <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
                    <Complexity name="Access" notation="O(1)" />
                    <Complexity name="Search" notation="O(n)" />
                    <Complexity name="Insertion" notation="O(n)" />
                    <Complexity name="Deletion" notation="O(n)" />
                    <Complexity name="Space" notation="O(n)" />
                </View>

                <Heading text="Declaring an Array" />
                <Paragraph text="An array must be declared before it can be used." />
                <Paragraph text="Declaring an array involves specifying the following:" />
                <List number="1. Data Type" text="The kind of values it can store e.g, int, char, float"/>
                <List number="2. name" text="used to identify the array"/>
                <List number="3. size" text="maximum number of values the array can store"/>
                <Paragraph text="The syntax for declaring an array is as follows:"/>   
                
                {/* syntax hignlighter  goes here  */}

                <Heading text="Calculating the Address of Array Elements"/>
                <Paragraph text="Since an array stoes all its data elements in consecutive memory locations, storinf just the base address, that is, the address of the first element in the array, is sufficient." />
                <Paragraph text="The address of the other data elements can be" />

                <Heading text="Calculating the size of the array"/>
                {/* some paragraph will gose heer */}
                <Heading text="Multi-Dimensional Arrays"/>
                <Paragraph text="An array may have more than one dimension to represent data. These are known as multidimensional arrays. The elements in these arrays are accessed using multiple indices."/>

                <Image style={{ width: "50%", height: 40, }} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/9/9e/CPT-arrays-2d-names.svg"}} />



                <Heading text="Declaring a 2D Array"/>
                <Paragraph text="A 2D array is declared using 2 parameters:" />
                <Paragraph text="type name[max_size_x][max_size_y]" />
                <Heading text="Calculating the Address of Array Elements"/>
                <Paragraph text="Since an array stores all its data elements in consecutive memory locations, storing just the base address, that is, the address of the first element in the array, is sufficient. "/>

                <Paragraph text="The address of other data elements can be then calculated using the base address. A simple formula can be used: "/>

                <Heading text="Multidimensional Arrays"/>
                <Paragraph text="Multidimensional arrays can be defined in simple words as array of arrays."/> 
                <Paragraph text="Data in a two-dimensional array, for example, can be visualised as a table. "/> 
                <Paragraph text="Each element in a multidimensional array can be accessed by specifying one or more indices."/> 
                

        </ScrollView>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    ArrayContainer:{
        // flex: 1,
        marginLeft: 10,
        marginRight: 10
    },


})
