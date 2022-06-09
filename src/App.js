import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';

import Familia from './components/relacao/Familia';
// import ParImpar from './components/ParImpar';
// import ContadorV2 from './components/Contador/ContadorV2';
// import Pai from './components/indirect/Pai';
// import Pai from './components/direct/Pai';
// import Contador from './components/Contador';
// import Button from './components/Button';
// import Title from './components/Title';
//import Random from './components/Random';
// import MinMax from './components/MinMax';
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro';

export default () => (
    <SafeAreaView style={style.App}>
        <Familia />
        {
            /*
            <ParImpar num={3}/>
            <ContadorV2 />
        <Pai />
        <Contador inicial={100} passo={13} />
        <Contador />
        <Random  min={1} max={60}/>
        <Button />
        <Title principal="Cadastro"
        secundario="Tela de Cadastro" />
        <MinMax min="3" max="20" />
         <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> 
        */
        }
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})