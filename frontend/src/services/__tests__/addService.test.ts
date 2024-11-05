import add from "../addService"

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
    const resultUseCaseOne = add('//;\n3;2')
    expect(resultUseCaseOne).toBe(5)
    expect(typeof resultUseCaseOne).toBe('number')
  })

  // it('calling add with negetive number should throw an exception', function () {
  //   expect(() => add('//;\n1;-2')).toThrow('Value must be non-negative')
  // })

  it('calling add with negetive number should throw an exception with all the negetive number present', function () {
    expect(() => add('//;\n1;-2;9;-1')).toThrow(`Value must be non-negative for -2,-1`)
    expect(() => add('//;\n1;-1')).toThrow(`Value must be non-negative for -1`)
  })
})