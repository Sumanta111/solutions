import React, { useState } from 'react'
import { Box, Button, Typography, Paper, Container } from '@mui/material'
import add from './services/addService'
import InputComponnet from './components/InputComponent'
import AcceptanceCriteriaComponent from './components/AcceptanceCriteriaComponent'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [displayedText, setDisplayedText] = useState<number | null>(null)
  const [error, setError] = useState<boolean>(false)
  const [helperText, sethelpertext] = useState('')

  const handleButtonClick = () => {
    try {
      const result = add(inputValue)
      setDisplayedText(result)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(true)
        sethelpertext(error.message)
        setDisplayedText(null)
      } else {
        setError(true)
        sethelpertext('An unknown error occurred.')
        setDisplayedText(null)
      }
    }
  }

  const onInputChange = (value: string) => {
    setInputValue(value)
    setError(false)
    sethelpertext('')
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '30px', textAlign: 'center', borderRadius: '10px' }}>
        <Typography variant="h5" gutterBottom style={{ marginBottom: '20px', fontWeight: 'bold', color: '#1976d2' }}>
          Enter Your Input for String Calculator
        </Typography>
        <InputComponnet error={error} onInputChange={onInputChange} helperText={helperText} />
        <Button
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          Submit
        </Button>
        {displayedText && (
          <Box mt={3}>
            <Typography variant="h6" style={{ color: '#555' }}>
              You Entered:
            </Typography>
            <Typography variant="h4" style={{ color: '#1976d2', fontWeight: 'bold' }}>
              {displayedText}
            </Typography>
          </Box>
        )}
      </Paper>
      <AcceptanceCriteriaComponent />
    </Container>
  )
}

export default App
