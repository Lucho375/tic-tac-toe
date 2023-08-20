import { checkWinner } from '../logic/checkWinner'
import { resolveWinnerLine } from '../logic/resolveWinnerLine'
import { BoardType } from '../types/BoardType'
import { SquareType } from '../types/SquareType'

interface WinnerLineProps {
  board: BoardType
  winner: false | SquareType | null
}

export default function WinnerLine({ board, winner }: WinnerLineProps) {
  const possibleWinner = checkWinner(board)
  if (!possibleWinner) return null
  const linePosition = resolveWinnerLine(possibleWinner.winningCombo)
  const className = `absolute pointer-events-none ${winner === 'X' ? 'bg-red-600' : 'bg-blue-600'} ${linePosition}`
  return <div className={className}></div>
}
