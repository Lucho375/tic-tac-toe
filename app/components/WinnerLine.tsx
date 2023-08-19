import { winningCombos } from '../constants/winningCombos'
import { checkWinner } from '../logic/checkWinner'
import { BoardType } from '../types/BoardType'
import { SquareType } from '../types/SquareType'

interface WinnerLineProps {
  board: BoardType
  winner: false | SquareType | null
}

export default function WinnerLine({ board, winner }: WinnerLineProps) {
  const possibleWinner = checkWinner(board)

  if (!possibleWinner?.winningCombo) return null

  const className = `absolute pointer-events-none ${winner === 'X' ? 'bg-red-600' : 'bg-blue-600'}`

  // Lines
  // [0, 1, 2]
  if (possibleWinner.winningCombo.every((value, index) => value === winningCombos[0][index]))
    return <div className={`${className} h-[1px] w-full top-[50px]`}></div>
  // [3, 4, 5]
  if (possibleWinner.winningCombo.every((value, index) => value === winningCombos[1][index]))
    return <div className={`${className} h-[1px] w-full top-[150px] `}></div>
  // [6, 7, 8]
  if (possibleWinner.winningCombo.every((value, index) => value === winningCombos[2][index]))
    return <div className={`${className} h-[1px] w-full top-[250px] `}></div>

  // Columns
  // [0, 3, 6]
  if (possibleWinner.winningCombo.every((value, index) => value === winningCombos[3][index]))
    return <div className={`${className} h-full w-[1px] left-[50px] `}></div>

  // [1, 4, 7]
  if (possibleWinner.winningCombo.every((value, index) => value === winningCombos[4][index]))
    return <div className={`${className} h-full w-[1px] left-[150px] `}></div>

  // [2, 5, 8]
  if (possibleWinner.winningCombo.every((value, index) => value === winningCombos[5][index]))
    return <div className={`${className} h-full w-[1px] left-[250px] `}></div>

  // Diagonals
  //[0, 4, 8]
  if (possibleWinner.winningCombo.every((value, index) => value === winningCombos[6][index]))
    return <div className={`${className} h-full w-[1px] left-[150px] rotate-[135deg] `}></div>

  // [2, 4, 6]
  if (possibleWinner.winningCombo.every((value, index) => value === winningCombos[7][index]))
    return <div className={`${className} h-full w-[1px] left-[150px] rotate-[45deg] `}></div>
}
