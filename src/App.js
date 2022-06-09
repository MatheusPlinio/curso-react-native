import React from 'react'
import { View, StyleSheet } from 'react-native';

import Button from './components/Button';
// import Title from './components/Title';
//import Random from './components/Random';
// import MinMax from './components/MinMax';
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro';

export default () => (
    <View style={style.App}>
        <Button />
        {
        /*<Random  min={1} max={60}/>
        <Title principal="Cadastro"
        secundario="Tela de Cadastro" />
        <MinMax min="3" max="20" />
         <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})