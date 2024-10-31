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
    console.log('SUMANTA', splittedString, '----', currentIndex)
    if (splittedString === '//' && currentIndex === 1) {
      return accum
    }
    if (!isNaN(Number(splittedString))) {
      return (accum += Number(splittedString))
    }
    return accum
  }, 0)
}

function patternmatch(input: string) {
  const pattern = /^\/\/(.)\n([\d;\s]*)$/
  const match = input.match(pattern)

  if (match) {
    const delimiter = match[1]
    const numbers = match[2]
    return { delimiter, numbers }
  }
  return null
}

export { add }
