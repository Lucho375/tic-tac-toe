import { SquareType } from '../types/SquareType'
import PlayerIcon from './PlayerIcon'

interface SquareProps {
  value: SquareType | null
  onClick: () => void
}

export default function Square({ value, onClick }: SquareProps) {
  return (
    <button className="border border-gray-400 min-h-[100px] bg-slate-900" onClick={onClick}>
      {value && (
        <PlayerIcon
          isPlayerXNext={value === 'X'}
          className={`!text-7xl  ${value === 'X' ? 'text-red-600' : 'text-blue-700'}`}
        />
      )}
    </button>
  )
}
