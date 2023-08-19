import { BoardType } from '../types/BoardType'
import { SquareType } from '../types/SquareType'
import Square from './Square'
import WinnerLine from './WinnerLine'

type BoardProps = {
  board: BoardType
  handleClick: (index: number) => void
  winner: false | SquareType | null
}

export default function Board({ board, handleClick, winner }: BoardProps) {
  return (
    <section className="w-[300px] h-[300px] grid grid-cols-3 gap-0 relative">
      {board.map((value, index: number) => (
        <Square key={index} onClick={() => handleClick(index)} value={value as SquareType | null} />
      ))}
      <WinnerLine board={board} winner={winner} />
    </section>
  )
}
