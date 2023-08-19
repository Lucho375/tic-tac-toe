import RestartAltIcon from '@mui/icons-material/RestartAlt'

type RestartButtonProps = {
  handleRestart: () => void
}

export default function RestartButton({ handleRestart }: RestartButtonProps): JSX.Element {
  return (
    <button
      onClick={handleRestart}
      type="button"
      className="bg-blue-900 rounded px-1 py-1 hover:bg-blue-800 active:scale-110"
    >
      <RestartAltIcon />
    </button>
  )
}
