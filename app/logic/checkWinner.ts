import { winningCombos } from '../constants/winningCombos'
import { BoardType } from '../types/BoardType'
import { SquareType } from '../types/SquareType'

interface CheckWinnerReturnType {
  newWinner: SquareType
  winningCombo: Array<number>
}

export function checkWinner(board: BoardType): CheckWinnerReturnType | null {
  for (const combo of winningCombos) {
    const [a, b, c] = combo as Array<number>
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { newWinner: board[a] as SquareType, winningCombo: combo }
    }
  }

  return null
}
