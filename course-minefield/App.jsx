import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import params from './src/params';
import Board from './src/components/Board';
import createMinedBoard from './src/fieldLogic';
import { cloneBoard, openField, hadExplosion, wonGame, showMines } from './src/gameLogic';

export default () => { 
    const rows = params.getRowsAmount()
    const columns = params.getColumnsAmount()
    
    const minesAmount = Math.ceil(rows * columns * params.difficultLevel)

    const [board, setBoard] = useState(createMinedBoard(rows, columns, minesAmount))

    const [won, setWon] = useState(false)
    const [lost, setLost] = useState(false)

    const onOpenField = (row, column) => {
        const newBoard = cloneBoard(board)

        openField(newBoard, row, column)
        
        const youLost = hadExplosion(newBoard)
        const youWon = wonGame(newBoard)

        if (youLost){
            showMines(newBoard)
            Alert.alert('Perdeu :c')
        }

        if (youWon) Alert.alert('Ganhou :D')

        setBoard(newBoard)
        setWon(youWon)
        setLost(youLost)    
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>==-=== Welcome to MineField! ===-==</Text>
            <Text style={styles.subtitle}>grid size:
                {params.getColumnsAmount()}x{params.getRowsAmount()}
            </Text>

            <View style={styles.board}>
                <Board board={board} onOpenField={onOpenField}/>
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
