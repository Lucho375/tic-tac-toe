import { Dispatch, SetStateAction, useState } from 'react'
import { checkWinner } from '../logic/checkWinner'
import { checkEndGame } from '../logic/checkEndGame'
import { BoardType } from '../types/BoardType'
import { SquareType } from '../types/SquareType'

const initialState: BoardType = Array(9).fill(null)

interface GameLogicReturnType {
  board: BoardType
  isPlayerXNext: boolean
  winner: false | SquareType | null
  showConfetti: boolean
  handleClick: (index: number) => void
  handleRestart: () => void
}

export default function useGameLogic(): GameLogicReturnType {
  const [board, setBoard]: [BoardType, Dispatch<SetStateAction<BoardType>>] = useState<BoardType>(initialState)
  const [isPlayerXNext, setIsPlayerXNext]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(true)
  const [showConfetti, setShowConfetti]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false)
  const [winner, setWinner]: [SquareType | null | false, Dispatch<SetStateAction<SquareType | null | false>>] =
    useState<SquareType | null | false>(null)

  const handleClick = (index: number): void => {
    if (board[index] || winner) {
      return
    }

    const newBoard = [...board]
    newBoard[index] = isPlayerXNext ? 'X' : 'O'
    setBoard(newBoard)
    setIsPlayerXNext(!isPlayerXNext)

    const somebodyWin = checkWinner(newBoard)

    if (somebodyWin?.newWinner) {
      setWinner(somebodyWin?.newWinner)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 5000)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const handleRestart = () => {
    setBoard(initialState)
    setIsPlayerXNext(true)
    setShowConfetti(false)
    setWinner(null)
  }

  return {
    board,
    isPlayerXNext,
    winner,
    showConfetti,
    handleClick,
    handleRestart
  }
}
