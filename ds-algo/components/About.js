import React, { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'
import Card from './Card'

export default function About({navigation}) {
    useLayoutEffect(() => {
      navigation.setOptions({
          headerTitle : 'About'
      })
    }, [])
    return (
        <View>
            <Text>This is about page</Text>
            <Card/>
        </View>
    )
}
