import { Typography } from '@mui/material'

const AcceptanceCriteriaComponent = () => {
  return (
    <>
      <Typography
        variant="h5"
        gutterBottom
        style={{ marginBottom: '20px', fontWeight: 'bold', color: '#1976d2', marginTop: 30 }}
      >
        Acceptance
      </Typography>
      <Typography variant="body1" gutterBottom style={{ marginBottom: '10px' }}>
        1. a string of comma-separated numbers
      </Typography>
      <Typography variant="body1" gutterBottom style={{ marginBottom: '10px' }}>
        2. any amount of number as input
      </Typography>
      <Typography variant="body1" gutterBottom style={{ marginBottom: '10px' }}>
        3. new lines between numbers (instead of commas) ("1\n2,3" should return 6)
      </Typography>
      <Typography variant="body1" gutterBottom style={{ marginBottom: '10px' }}>
        4. Put delimiter, the beginning of the string will contain a separate line that looks like this:
        "//[delimiter]\n[numbers…]". For example, "//;\n1;2" where the delimiter is ";" should return 3
      </Typography>
      <Typography variant="body1" gutterBottom style={{ marginBottom: '10px' }}>
        5. Calling add with a negative number will throw an exception: "negative numbers not allowed negative_number",
        If there are multiple negative numbers, show all of them in the exception message, separated by commas.
      </Typography>
    </>
  )
}

export default AcceptanceCriteriaComponent
