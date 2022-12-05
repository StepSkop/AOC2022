export default function day1(x) {
    let sortedX = x.split("\n");
    let count = 0
    let finCount = 0
    let elves = []
    for (let index = 0; index < sortedX.length; index++) {
      const element = sortedX[index];
      if (element == '') {
        count = 0
      }
      else {
          count += parseInt(element)
          elves.push(count)
          if (count > finCount) {
              finCount = count
          }
      }
    }
  
    elves = elves.sort(function(a, b) {
      return a - b
    })
  
    let topThree = elves[elves.length - 1] + elves[elves.length - 2] + elves[elves.length - 3]
    return finCount + ", " + topThree;
  }