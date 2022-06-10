import React from 'react'
import { Text } from 'react-native'
import style from './style'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
            <If test={usuario}>
                <Text style={style.txtG}>Usuario Logado:</Text>
                <Text style={style.txtG}>{usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}