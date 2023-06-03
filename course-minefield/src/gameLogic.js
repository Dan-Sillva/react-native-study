const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return { ...field }
        })
    })
}

// pega os vizinhos do campo selecionado
const getNeighbors = (board, row, column) => {
    const rows = [row-1, row, row+1]
    const columns = [column-1, column, column+1]

    const result = rows.map(interRow => {
        return columns.map(interColumn => {
            if((interRow < board.length && interRow >= 0) && (interColumn < board[0].length && interColumn >= 0)){
                return board[interRow][interColumn]
            }
        })
    }).flat()

    return result.filter(field => field != undefined)
}

// verifica se a visinhança é segura
const safeNeighborhood = (board, row, column) => {
    const neighbors = getNeighbors(board, row, column)
    const safes = (result, neighbor) => result && !neighbor.mined
    
    return neighbors.reduce(safes, true)
}

// abre os campos
const openField = (board, row, column) => {
    const field = board[row][column]

    if(!field.opened){
        field.opened = true
        if(field.mined){
            field.exploded = true
        } else if(safeNeighborhood(board, row, column)){
            getNeighbors(board, row, column)
            .forEach(neighbor => openField(board, neighbor.row, neighbor.column))
        } else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(neighbor => neighbor.mined).length
        }
    }
}

const fields = board => board.flat()

const hadExplosion = board => fields(board)
    .filter(field => field.exploded).length > 0

const pendding = field => (field.mined && !field.flagged)
    || (!field.mined && !field.opened)

const wonGame = board => fields(board).filter(pendding).length === 0

const showMines = board => fields(board).filter(field => field.mined)
    .forEach(fields => fields.opened = true)

const invertFlag = (board, row, column) => {
    const field = board[row][column]
    field.flagged = !field.flagged
}

const flagsUsed = board => fields(board).filter(field => field.flagged).length

export {
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed
}