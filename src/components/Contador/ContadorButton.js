import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default props => {
    return (
        <>
        <View style={Buttons.HighLow}>
            <Button title="+" onPress={props.inc}/>
            <Button title="-" onPress={props.dec}/>
        </View>
        </>
    )
}

const Buttons = StyleSheet.create ({
    HighLow: {
        flexDirection: "row",
    }
})