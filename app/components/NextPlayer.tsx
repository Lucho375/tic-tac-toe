import PlayerIcon from './PlayerIcon'

interface NextPlayerProps {
  isPlayerXNext: boolean
}

export default function NextPlayer({ isPlayerXNext }: NextPlayerProps): JSX.Element {
  return (
    <section className="bg-slate-800 rounded-md px-2 py-1 flex items-center">
      <h2 className="font-thin">Next Player : </h2>
      <PlayerIcon
        isPlayerXNext={isPlayerXNext}
        className={`text-3xl ${isPlayerXNext ? 'text-red-600' : 'text-blue-700'}`}
      />
    </section>
  )
}
