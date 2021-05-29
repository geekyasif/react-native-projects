import React, {useLayoutEffect, useEffect, useState} from 'react'
import { StyleSheet,FlatList , SafeAreaView, ScrollView} from 'react-native'
import { View, Text } from 'react-native'
import DataCenters from '../components/dataCenters'
import Spinner from 'react-native-loading-spinner-overlay';

export default function dataScreen({navigation, route}) {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true);
    const {url} = route.params
    console.log(url)

    useLayoutEffect(() => {
        navigation.setOptions({
            title:"Covid-19 Vaccination Centers"
        })
    }, [navigation])

    useEffect(()=>{
        // const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=277001&date=29-05-2021`
        console.log(url)
        fetch(url).then((response)=>{
            return response.json()
        }).then((data)=>{
            setData(data.centers)
        }).catch((error)=>{
            console.error(error)
        }).finally(()=>{
            setLoading(false)
        })
    }, []);

    return (
            <SafeAreaView style={styles.container}>
    

         { isLoading ? ( <View style={styles.spinnerContainer}>
            <Spinner visible={isLoading}  textStyle={styles.spinnerTextStyle} />
         </View>) : ( <FlatList
                                data={data}
                                renderItem={({item}) => (
                                    <DataCenters item={item}/>
                                  )}
                            />)
        }
               
            </SafeAreaView>

        
            // <ScrollView style={styles.container}>
            //     {data.map(({item})=>(
            //                 <DataCenters item={item}/>
            //         ))}
            // </ScrollView>
            // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        // flex: 1,

    },
    spinnerContainer:{
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'

    },
    spinnerTextStyle:{
        // margin: 40,
        // padding: 40,
        // color: 'red'
    }


})
