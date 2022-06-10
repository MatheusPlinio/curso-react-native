import React from 'react'
import {Text} from 'react-native'
import style from '../style'



export default props => {
    return (
        <>
            <Text style={style.txtG}>Membros da Familia:</Text>
            {props.children}
        </>
    )
}