import { render } from '@testing-library/react'
import AcceptanceCriteriaComponent from '../AcceptanceCriteriaComponent'

describe('Match against snapshot', () => {
  it('Should match against snapshot', () => {
    const container = render(<AcceptanceCriteriaComponent />)
    expect(container).toMatchSnapshot()
  })
})
