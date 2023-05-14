import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import params from './src/params';
import Board from './src/components/Board';
import createMinedBoard from './src/fieldLogic';

export default () => { 
    const difficultLevel = 0.1

    const rows = params.getRowsAmount()
    const columns = params.getColumnsAmount()
    
    const minesAmount = Math.ceil(rows * columns * difficultLevel)

    const [board, setBoard] = useState(createMinedBoard(rows, columns, minesAmount))

    return (
        <View style={styles.container}>
            <Text style={styles.title}>==-=== Welcome to MineField! ===-==</Text>
            <Text style={styles.subtitle}>grid size:
                {params.getColumnsAmount()}x{params.getRowsAmount()}
            </Text>

            <View style={styles.board}>
                <Board board={board}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141412',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',

        color:'#fff'
    },
    
    subtitle: {
        fontSize: 18,
        marginBottom: 25,

        color:'#fff'
    },

    board: {
        alignItems: 'center',
        marginBottom: 16
    }
});
