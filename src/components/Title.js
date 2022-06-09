import React from "react";
import { Text } from 'react-native'
import style from "./style";

export default props => (
    <React.Fragment>
        <Text style={style.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </React.Fragment>
)
