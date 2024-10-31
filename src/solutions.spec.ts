import { add } from './solutions.js'

describe('Test add functions', function () {
  it('The function should return an integer, the sum of the strings passed by comma seperated', function () {
    const resultUseCaseOne = add('1,2,3,4')
    const resultUseCaseTwo = add('1')
    const resultUseCaseThree = add('')

    expect(resultUseCaseOne).toBe(10)
    expect(resultUseCaseTwo).toBe(1)
    expect(resultUseCaseThree).toBe(0)
    expect(typeof resultUseCaseOne).toBe('number')
    expect(typeof resultUseCaseThree).toBe('number')
    expect(typeof resultUseCaseThree).toBe('number')
  })

  it('The function should return an integer, the sum of the strings passed where the delimeter is \n', function () {
    const resultUseCaseOne = add(`1\n2,3`)
    expect(resultUseCaseOne).toBe(6)
    expect(typeof resultUseCaseOne).toBe('number')
  })

  it('The function should return an integer, the sum of the strings passed where the delimeter is passed beginning of the string with //[delemiter]\n[numbers pattern]', function () {
    const resultUseCaseOne = add('//;\n1;2')
    expect(resultUseCaseOne).toBe(3)
    expect(typeof resultUseCaseOne).toBe('number')
  })
})
