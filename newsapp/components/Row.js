import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import Articles from '../components/articles'
// import axios from '../axios'
// import axios from 'axios'

export default function Row({heading, fetchUrl}) {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch("https://newsapi.org/v2" + fetchUrl)
                .then(res => res.json())
                .then(data => {
                    setArticles(data.articles)
                })
                .catch(err => console.log(err))
            
    }, [])

    return (
        <View style={styles.container}>
          <Text style={styles.heading}>{heading}</Text>
          <SafeAreaView>
            <View style={styles.row}>
                    {articles.map(article => (
                        
                        <Articles title={article.title} img={article.urlToImage} desc={article.description} name={article.source.name} published={article.publishedAt} />
                ))}
            </View>
            </SafeAreaView> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 10,
        marginTop: 10,
    },
    heading:{
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
        marginLeft: 20,
    },
    row:{
        flexDirection: 'row',
        overflow: "scroll",
        margin: 10,
        
    },
})