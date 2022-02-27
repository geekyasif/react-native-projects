import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import HTML from "react-native-render-html";
// import { SafeAreaView } from 'react-native-safe-area-context';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import parse from 'html-react-parser'
// import { color } from 'react-native-reanimated';

export default function SolutionScreen({route, navigation}) {

    const solution = route.params.data.solution

    return (
        

        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.code} >{parse(solution)}</Text>
                {/* <View> 
                </View> */}
                    {/* // <HTML style={{ backgroundColor : 'red'}} source={{ html: solution }}  /> */}
                {/* <HTML source={{ html: solution }}  /> */}
                {/* <SyntaxHighlighter  language="python" style={docco}>
                        {solution}
                </SyntaxHighlighter> */}
            
            </View>
        </ScrollView>

    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: "center",
    },
    code:{
        backgroundColor: "black",
        padding: 20,
        color: 'white'
    }
})

