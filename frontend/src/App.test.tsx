import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import add from './services/addService'

jest.mock('./services/addService') // Mock the add service

const mockedAdd = add as jest.MockedFunction<typeof add>

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks() // Clear any previous mocks
  })

  test('renders the input and button correctly', () => {
    render(<App />)
    expect(screen.getByText(/Enter Your Input for String Calculator/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument()
  })

  test('updates input value on change', () => {
    render(<App />)

    // Get the input element
    const input = screen.getByRole('textbox') as HTMLInputElement // Assert type as HTMLInputElement
    fireEvent.change(input, { target: { value: '10' } })

    // Check if the input value is updated correctly
    expect(input.value).toBe('10')
  })

  test('displays result on button click', () => {
    mockedAdd.mockReturnValue(20) // Mocking the return value of the add function
    render(<App />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: '10' } })
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }))

    expect(screen.getByText(/You Entered:/i)).toBeInTheDocument()
    expect(screen.getByText('20')).toBeInTheDocument() // Result displayed
  })

  test('handles errors gracefully', () => {
    mockedAdd.mockImplementation(() => {
      throw new Error('Test error')
    }) // Simulate an error
    render(<App />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: '1,2,-3' } })
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }))

    expect(screen.getByText(/Test error/i)).toBeInTheDocument() // Check for the error message
  })
})
