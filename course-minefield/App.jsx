import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import params from './src/params';
import createMinedBoard from './src/fieldLogic';
import { cloneBoard, openField, hadExplosion, wonGame, showMines, invertFlag, flagsUsed } from './src/gameLogic';

import Board from './src/components/Board';
import Header from './src/components/Header';

export default () => { 
    const rows = params.getRowsAmount()
    const columns = params.getColumnsAmount()
    
    const minesAmount = Math.ceil(rows * columns * params.difficultLevel)

    const [board, setBoard] = useState(createMinedBoard(rows, columns, minesAmount))

    const onNewGame = () => {
        setBoard(createMinedBoard(rows, columns, minesAmount))
    }

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
    }

    const onFlaggingField = (row, column) => {
        const newBoard = cloneBoard(board)
        
        invertFlag(newBoard, row, column)
        
        const youWon = wonGame(newBoard)
        if (youWon) Alert.alert('Ganhou :D')

        setBoard(newBoard)
    }

    return (
        <View style={styles.container}>
            <Header flagsLeft={minesAmount - flagsUsed(board)} onNewGame={onNewGame}/>

            <View style={styles.board}>
                <Board board={board} onOpenField={onOpenField} onFlaggingField={onFlaggingField}/>
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
