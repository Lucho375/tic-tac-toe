import PlayerIcon from './PlayerIcon'

interface NextPlayerProps {
  isPlayerXNext: boolean
}

export default function NextPlayer({ isPlayerXNext }: NextPlayerProps): JSX.Element {
  return (
    <div>
      <span>Next Player : </span>
      <PlayerIcon
        isPlayerXNext={isPlayerXNext}
        className={`text-3xl ${isPlayerXNext ? 'text-red-600' : 'text-blue-700'}`}
      />
    </div>
  )
}
