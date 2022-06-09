import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import style from '../style'

export default props => {
    return (
        <View style={styleCount.Display}>
            <Text style={[style.txtG, styleCount.DisplayText]}>
                {props.num}
            </Text>
        </View>
        
    )
}

const styleCount = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300,
    },
    DisplayText: {
        color: '#FFF'
    }
})


