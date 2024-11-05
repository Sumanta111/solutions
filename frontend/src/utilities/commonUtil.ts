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

export default patternmatch;