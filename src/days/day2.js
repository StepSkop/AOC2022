export default function day2(x) {
    let sortedX = x.split('\n')
    sortedX = sortedX.slice(0, -1)
  
    //PART 1
    let opponent = {
      "A": 0,
      "B": 1,
      "C": 2,
    }
    let me = {
      "Y": 1,
      "X": 0,
      "Z": 2,
    }
    let res = 0
    sortedX.forEach(element => {
      res += me[element[2]] + 1 
      if (opponent[element[0]] == me[element[2]]) {
        res += 3
      }
      else if ((opponent[element[0]] + 1) % 3 == me[element[2]] ) {
        res += 6
      }
      else {
        res += 0
      }
    });
  
    //PART 2
    let me2 = {
      "Y": 1,
      "X": 0,
      "Z": 2,
    }
    function part2(opponentY, me2Y, element) {
      let resY = 0
      if (opponentY[element[0]] == me2Y[element[2]]) {
        resY += 3
      }
      else if ((opponentY[element[0]] + 1) % 3 == me2Y[element[2]] ) {
        resY += 6
      }
      else {
        resY += 0
      }
      return resY
    }
  
    let res2 = 0
    sortedX.forEach(element => {
      switch (element[0]) {
        case "A":
          me2 = {
            "X": 2,
            "Y": 0,
            "Z": 1
          }
          res2 += me2[element[2]] + 1 
          res2 += part2(opponent, me2, element)
          break;
        case "B":
          me2 = {
            "X": 0,
            "Y": 1,
            "Z": 2
          }
          res2 += me2[element[2]] + 1 
          res2 += part2(opponent, me2, element)
          break;
        case "C":
          me2 = {
            "X": 1,
            "Y": 2,
            "Z": 0
          }
          res2 += me2[element[2]] + 1 
          res2 += part2(opponent, me2, element)
          break;
      }
    });
    return res + ", " + res2
  }