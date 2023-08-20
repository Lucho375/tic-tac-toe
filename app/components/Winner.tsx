import PlayerIcon from './PlayerIcon'

interface WinnerProps {
  isPlayerXWinner: boolean
}

export default function Winner({ isPlayerXWinner }: WinnerProps) {
  return (
    <section className="bg-slate-800 rounded-md px-2 py-1 flex items-center">
      <h2 className="font-thin">Winner :</h2>
      <PlayerIcon
        isPlayerXNext={isPlayerXWinner}
        className={`text-3xl  ${isPlayerXWinner ? 'text-red-600' : 'text-blue-700'}`}
      />
    </section>
  )
}
