import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import createMinedBoard from "../fieldLogic";
import params from "../params";
import Field from "./Field";

export default props => {
    const componentBoard = props.board.map((row, rowIndex) => {
        const fields = row.map((field, fieldIndex) => {
            return <Field {...field} key={fieldIndex}/>
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