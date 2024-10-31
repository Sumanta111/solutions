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
  return currentString.split(pattern).reduce((accum: number, splittedString: string, currentIndex: number) => {
    if (Math.sign(Number(splittedString)) === -1) {
      throw new Error('Value must be non-negative')
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
