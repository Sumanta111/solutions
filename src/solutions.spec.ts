import { add } from './solutions.js'

describe('Test add functions', function () {
  it('The function should return an integer, the sum of the strings passed by comma seperated', function () {
    const result = add('1,2,3,4')

    expect(result).toBe(10)
    expect(typeof result).toBe('number')
  })
})
