import CloseIcon from '@mui/icons-material/Close'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

type PlayerIconProps = {
  isPlayerXNext: boolean
  className: string
}

export default function PlayerIcon({ isPlayerXNext, className }: PlayerIconProps): JSX.Element {
  return <>{isPlayerXNext ? <CloseIcon className={className} /> : <RadioButtonUncheckedIcon className={className} />}</>
}
