import { BoardType } from '../types/BoardType'
import { CellType } from '../types/CellType'

export const checkEndGame = (arr: BoardType): boolean => arr.every((cell: CellType) => cell !== null)
