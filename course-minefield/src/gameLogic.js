const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

const spreadMines = (board, minesAmount) => {
    const row = board.length
    const column = board[0].length

    let minesPlanted = 0
    while(minesPlanted < minesAmount) {
        const rowSelected = parseInt(Math.random() * row, 10)
        const columnSelected = parseInt(Math.random() * column, 10)

        if(!board[rowSelected][columnSelected].mined){
            board[rowSelected][columnSelected].mined = true
            minesPlanted++
        }
    }
}

const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)

    return board
}

export default createMinedBoard