import React, { useState } from 'react'
import {View, TextInput, Text,  } from 'react-native'
import style from './style'

export default props => {
    const [nome, setNome] = useState('Usuário')
    return (
        <View>
            <Text>{nome}</Text>
            <TextInput 
                placeholder='Digite o e-mail'
                value={null}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}