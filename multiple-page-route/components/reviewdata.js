import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native';

export default function reviewdata() {
    const [review, setReview] = ([
        {title: 'Radhe', body: 'Very boring and bekar movie', key:1},
        {title: 'Radhe', body: 'Very boring and bekar movie', key:1},
        {title: 'Radhe', body: 'Very boring and bekar movie', key:1},
        {title: 'Radhe', body: 'Very boring and bekar movie', key:1},
        {title: 'Radhe', body: 'Very boring and bekar movie', key:1},
    ]);

    const reviewDetail = () =>{
        navigator.navigator('Review Detail', item)
    }

    return (
        <View>
            <FlatList
                data={review}
                renderItem = {(item)=>{
                    <TouchableOpacity onPress={reviewDetail}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                }}
            />
       
        </View>
    )
}
