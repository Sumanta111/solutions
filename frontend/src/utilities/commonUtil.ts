function patternmatch(input: string) {
  const pattern = /^\/\/(.+)\n([-?\d; *+?.^$|()\[\]{}\\]*)$/
  const match = input.match(pattern)

  if (match) {
    const delimiter = match[1]
    const numbers = match[2]
    return { delimiter, numbers }
  }
  return null
}

function escapeRegExp(string: string) {
  return string.replace(/([.*+?^${}()|\[\]\\/])/g, '\\$1')
}

export { patternmatch, escapeRegExp }
