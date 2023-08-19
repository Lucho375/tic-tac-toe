import PlayerIcon from './PlayerIcon'

interface WinnerProps {
  isPlayerXWinner: boolean
}

export default function Winner({ isPlayerXWinner }: WinnerProps) {
  return (
    <div>
      <span>Winner :</span>
      <PlayerIcon
        isPlayerXNext={isPlayerXWinner}
        className={`text-3xl ${isPlayerXWinner ? 'text-red-600' : 'text-blue-700'}`}
      />
    </div>
  )
}
