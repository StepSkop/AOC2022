export default function day6(input) {
    let res
    let res2
    let fourChars = input.substring(0, 4).split('')
    for (let index = 4; index < input.length; index++) {
        const element1 = input[index]
        let special = new Set(fourChars)
        if (special.size === 4) {
            res = index
            break
        }
        fourChars.shift()
        fourChars.push(input[index])
    }

    //Part 2
    let fourChars2 = input.substring(0, 14).split('')
    for (let index = 14; index < input.length; index++) {
        let special = new Set(fourChars2)
        if (special.size === 14) {
            res2 = index
            break
        }
        fourChars2.shift()
        fourChars2.push(input[index])
    }

    return res + ", "+ res2
}