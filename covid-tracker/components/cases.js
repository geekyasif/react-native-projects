import React, {useState, useEffect} from 'react'
import { StyleSheet, FlatList, SafeAreaView, StatusBar} from 'react-native'
import Case from './caseData';

export default function cases() {
    const [isLoading, setLoading] = useState(true);
    const [covidData, setCovidData] = useState([])
    // console.log(covidData.statewise)
  
    useEffect(()=>{
        // const url = 'https://api.covid19india.org/state_district_wise.json'
        // const url = 'https://corona.lmao.ninja/v2/all'
        const url ="https://api.covid19india.org/data.json "
        fetch(url).then((response)=>{
            return response.json()
        }).then((data)=>{
                setCovidData(data.statewise)
        }).catch((error)=>{
            console.error(error)
        }).finally(()=>{
            setLoading(false)
        })
    }, []);

    return (
       <SafeAreaView style={styles.container}> 
            <FlatList
                data={covidData}
                renderItem={({item}) => (
                    <Case item={item} />
                  )}
            />
    </SafeAreaView> 
 
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    scrollView:{
    }
})






