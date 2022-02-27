import React from 'react'
import { View, StyleSheet } from 'react-native'
import request from '../requestCategories'
import Row from '../components/Row'

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.homeContainer}>
            <Row heading="Sports" fetchUrl={request.sports}/>
            <Row heading="Technology" fetchUrl={request.technology}/>
            {/* <Row heading="Entertainment" fetchUrl={request.entertainment}/> */}
            <Row heading="Science" fetchUrl={request.science}/>
            <Row heading="Health" fetchUrl={request.health}/>
            <Row heading="Business" fetchUrl={request.business}/>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        overflow: 'scroll'
    }
})
