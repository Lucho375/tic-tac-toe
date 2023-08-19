import { type SquareType } from '../types/SquareType'
import NextPlayer from './NextPlayer'
import Tie from './Tie'
import Winner from './Winner'

interface GameStatusProps {
  winner: false | SquareType | null
  isPlayerXNext: boolean
}

export default function GameStatus({ winner, isPlayerXNext }: GameStatusProps): JSX.Element {
  const isGameInProgress: boolean = winner === null
  const isTie: boolean = winner === false
  const isPlayerXWinner: boolean = winner === 'X'

  return (
    <section>
      {isGameInProgress ? (
        <NextPlayer isPlayerXNext={isPlayerXNext} />
      ) : isTie ? (
        <Tie />
      ) : (
        <Winner isPlayerXWinner={isPlayerXWinner} />
      )}
    </section>
  )
}
