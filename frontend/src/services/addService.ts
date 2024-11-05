import patternmatch from "../utilities/commonUtil"

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

export default add;