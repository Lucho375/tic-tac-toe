'use client'
import Confetti from 'react-confetti'
import useGameLogic from '../hooks/useGameLogic'
import Board from './Board'
import RestartButton from './RestartButton'
import GameStatus from './GameStatus'

export default function Game(): JSX.Element {
  const { board, isPlayerXNext, winner, showConfetti, handleClick, handleRestart } = useGameLogic()

  return (
    <section>
      <h1 className="text-3xl font-semibold mb-4 text-center">Tic-Tac-Toe</h1>
      <div className="flex justify-between mb-5">
        <GameStatus winner={winner} isPlayerXNext={isPlayerXNext} />
        <RestartButton handleRestart={handleRestart} />
      </div>
      <Board board={board} handleClick={handleClick} winner={winner} />
      {showConfetti && <Confetti />}
    </section>
  )
}
