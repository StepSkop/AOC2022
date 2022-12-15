export default function day5(x) {

    let rowStacks = []
    let input = x.split("\n\n").map(l => l.split("\n"));
    input[0].forEach(line => {
        let row = []
        if (!(line === input[0][input[0].length - 1 ])){
            for (let index = 0; index < line.length; index+=4) {
                row.push(line.slice(index, index + 4).trim().replace("\[", "").replace("\]", ""));
            }
            rowStacks.push(row)
        };
    });

    let stacks = []
    for (let index2 = 0; index2 < rowStacks[rowStacks.length - 1].length; index2++) {
        let column = []
        for (let y = 0; y < rowStacks.length; y++) {
            if (rowStacks[y][index2] == '') continue;
            column.push(rowStacks[y][index2])
        }
        stacks.push(column)
    }

    let moves = input[1];
    moves.forEach(move => {
        move = move.replace("move ","").replace(" from ", " ").replace(" to ", " ").split(" ")
        if (move[0] == '') {
            return false
        }
        let num = parseInt(move[0])
        let from = parseInt(move[1])
        let to = parseInt(move[2])
        
        stacks[to - 1].unshift(...stacks[from - 1].splice(0, num).reverse()) //<- For second part, remove .reverse() from end of this line
    });

    const result = stacks.map(stack => stack[0]).join('');
    return result + ', (for Part 2 see comment in /src/days/day5.js line 35)'
}