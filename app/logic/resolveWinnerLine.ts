import { lineWinner } from '../constants/lineWinner'
import { winningCombos } from '../constants/winningCombos'

export function resolveWinnerLine(arr: Array<number>): string {
  const position = winningCombos.findIndex(combo => arr.every((value: number, index: number) => value === combo[index]))
  return lineWinner[position] ?? ''
}
