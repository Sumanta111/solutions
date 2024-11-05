import TextField from '@mui/material/TextField'
import { useState } from 'react'

type InputType = {
  error: boolean
  helperText: string
  onInputChange: (param: string) => void
} & typeof defaultProps

export default function InputComponnet({ error, helperText, onInputChange }: InputType) {
  const [userInput, setUserInput] = useState('')

  const onChangeCalc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toString()
    setUserInput(value)
    onInputChange(value)
  }

  return (
    <TextField
      id="string-calc-input"
      error={error}
      label="Please enter input"
      variant="outlined"
      value={userInput}
      onChange={onChangeCalc}
      helperText={helperText}
      inputProps={{ spellCheck: false }} // Optionally disable spell check
    />
  )
}

const defaultProps = {
  error: false,
  helperText: '',
}

InputComponnet.defaultProps = defaultProps
