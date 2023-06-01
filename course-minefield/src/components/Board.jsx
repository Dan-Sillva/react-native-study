import React from "react";
import { View, StyleSheet, Alert} from "react-native";

import createMinedBoard from "../fieldLogic";
import params from "../params";
import Field from "./Field";

export default props => {
    const componentBoard = props.board.map((row, rowIndex) => {
        const fields = row.map((field, columnIndex) => {
            return <Field {...field} key={columnIndex} 
                    onOpen={() => props.onOpenField(rowIndex, columnIndex)}/>
        })
        return <View style={style.rows} key={rowIndex}>{fields}</View>
    })

    return <View>{componentBoard}</View>
}

const style = StyleSheet.create({
    rows: {
        flexDirection: 'row',
    },
}) 