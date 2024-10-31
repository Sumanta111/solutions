function add(fullString: string) {
    return fullString.split(/(,|\n|\/\/)/).reduce((accum: number, splittedString: string, currentIndex: number) => {
        console.log("SUMANTA",splittedString)
        if (!isNaN(Number(splittedString))) {
            return (accum += Number(splittedString))
        }
        return accum;
    }, 0)
}

export { add }
