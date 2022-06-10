import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';

import Mega from './components/Mega/Mega';

// import FlexboxV4 from './components/layout/FlexboxV4';
// import FlexboxV3 from './components/layout/FlexboxV3';
// import FlexboxV2 from './components/layout/FlexboxV2';
// import Quadrado from './components/layout/Quadrado';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import UsuarioLogado from './components/UsuarioLogado';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
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
        <Mega qtdNumeros={7}/>
        {
            /*
            <FlexboxV4 />
            <FlexboxV2 />
            <FlexboxV1 />
            <Quadrado cor='#ff801a'/>
            <Quadrado cor='#50d1f6'/>
            <Quadrado cor='#dd22c1'/>
            <Quadrado cor='#8312ed'/>
            <Quadrado cor='#36c9a7'/>
            <DigiteSeuNome />
            <UsuarioLogado usuario={{ nome: 'Gui', email: 'master@gmail.com' }} />
            <Familia>
                <Membro nome="Bia" sobrenome="Arruda" />
                <Membro nome="Carlos" sobrenome="Arruda" />
            </Familia>
            <Familia>
                <Membro nome="Ana" sobrenome="Silva" />
                <Membro nome="Alex" sobrenome="Silva" />
            </Familia>
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