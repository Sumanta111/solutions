function add(fullString: string) {
  return fullString.split(',').reduce((accum: number, splittedString: string, currentIndex: number) => {
    return (accum += Number(splittedString))
  }, 0)
}

export { add }
