import React, { useState } from 'react'
import './App.css'
import InputComponnet from './components/InputComponent'
import Button from '@mui/material/Button'
import add from './services/addService'

function App() {
  const [formValue, setFormvalue] = useState('')
  const [result, setResult] = useState<number>()
  const onSubmit = () => {
    const res = add(formValue)
    setResult(res)
  }

  const onInputChange = (value: string) => {
    setFormvalue(value)
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 5 }}>
        <InputComponnet onInputChange={onInputChange} />
        <Button color="primary" variant="contained" type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </div>
      {result && <p>Result : {result}</p>}
    </>
  )
}

export default App
