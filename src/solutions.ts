function add(fullString: string) {
  const matchedPattern = patternmatch(fullString)
  let pattern
  let currentString
  if (matchedPattern) {
    pattern = new RegExp(`(${matchedPattern.delimiter}|,|\n|\/\/)`)
    currentString = matchedPattern.numbers
  } else {
    pattern = /(,|\n|\/\/)/
    currentString = fullString
  }
  const negetiveNumbersPresent: number[] = []
  const spliteedWithPattern = currentString.split(pattern)
  return spliteedWithPattern.reduce((accum: number, splittedString: string, currentIndex: number) => {
    const isNegetiveNumber = Math.sign(Number(splittedString)) === -1
    if (isNegetiveNumber) {
      negetiveNumbersPresent.push(Number(splittedString))
    }
    if (negetiveNumbersPresent.length > 0 && currentIndex === spliteedWithPattern.length - 1) {
      throw new Error(`Value must be non-negative for ${negetiveNumbersPresent.join(',')}`)
    }
    if (!isNaN(Number(splittedString))) {
      return (accum += Number(splittedString))
    }
    return accum
  }, 0)
}

function patternmatch(input: string) {
  const pattern = /^\/\/(.)\n([-?\d; \n]*)$/
  const match = input.match(pattern)

  if (match) {
    const delimiter = match[1]
    const numbers = match[2]
    return { delimiter, numbers }
  }
  return null
}

export { add }
