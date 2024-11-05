import TextField from '@mui/material/TextField'
import { useState } from 'react'

type InputType = {
  error: boolean
  helperText: string
  onInputChange: (param: string) => void
} & typeof defaultProps

export default function InputComponnet({ error, onInputChange, helperText }: InputType) {
  const [userInput, setUserInput] = useState('')

  const onChangeCalc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toString()
    setUserInput(value)
    onInputChange(value)
  }

  return (
    <TextField
      label="Your Input"
      variant="outlined"
      fullWidth
      value={userInput}
      onChange={onChangeCalc}
      style={{ marginBottom: '20px' }}
      error={error}
      helperText={helperText || ''}
    />
  )
}

const defaultProps = {
  error: false,
  helperText: '',
}

InputComponnet.defaultProps = defaultProps
