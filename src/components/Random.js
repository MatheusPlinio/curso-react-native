import React from "react";
import { Text } from 'react-native'
import style from './style'

export default props => {
    const {min, max} = props
    const delta = max - min + 1
    const random = parseInt(Math.random() * delta) + min
    return (
        <Text style={style.txtG}>
            O valor aleatório é {random}
        </Text>     
    )
}