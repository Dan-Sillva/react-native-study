const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return { ...field }
        })
    })
}

const getNeighbors = (board, row, column) => {
    const neighbors = []
    const rows = [row-1, row, row+1]
    const columns = [column-1, column, column+1]

    rows.forEach(r => {
        columns.forEach(c => {
            const diferent = r !== row || c !== column
            const validRow = r >= 0 && r < board.length
            const validColumn = c >= 0 || c < board[0].length

            if (diferent && validRow && validColumn){
                neighbors.push(board[r][c])
            }
        })
    })

    console.table(neighbors)
    return neighbors   
}

const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined
    return getNeighbors(board, row, column).reduce(safes, true)
}

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

const fields = board => [].concat(...board)

const hadExplosion = board => fields(board)
    .filter(field => field.exploded).length > 0

const pendding = field => (field.mined && !field.flagged)
    || (!field.mined && !field.opened)

const wonGame = board => fields(board).filter(pendding).length === 0

const showMines = board => fields(board).filter(field => field.mined)
    .forEach(fields => fields.opened = true)


export {
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines
}