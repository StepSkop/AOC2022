import http from 'https'
import readline from "readline";
import dotenv from "dotenv"

//REQUEST PUZZLE INPUT and REPLY
dotenv.config()
globalThis.http = http
function req(day) {
  let result
  const options = {
      "method": "GET",
      "hostname": "adventofcode.com",
      "port": null,
      "path": "/2022/day/"+day+"/input",
      "headers": {
        "Cookie": process.env.COOKIE
      }
    };
    const req = http.request(options, function (res) {
      const chunks = [];
    
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
      res.on("end", function () {
        const body = Buffer.concat(chunks);

        const splitter = "----------------------------------------------------------------------"
        console.log("\n" + splitter);
        switch (day) {
          case 1:
            console.log(`Day ${day} answers are: ${day1(body.toString())}`);
            break;

          case 2:
            console.log(`Day ${day} answers are: ${day2(body.toString())}`);
            break;
          
          case 3:
            console.log(`Day ${day} answers are: ${day3(body.toString())}`);
            break;

          default:
            console.log("Not implemeted (yet)")
            break;
        }
        console.log(splitter + "\n");
        ask()
      });
    });
    req.end();
}

//QUESTION (get day number)
let day
const rl = readline.createInterface({
  input: process.stdin, output: process.stdout
});
var ask = function () {
  rl.question('Pick a day? ', (b) => {
    day = parseInt(b)
    req(day);
  })
}
ask()

//DAYS
function day1(x) {
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
function day2(x) {
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
function day3(x) {
  let sortedX = x.split('\n')
  sortedX = sortedX.slice(0, -1)

  let alph = "abcdefghijklmnopqrstuvwxyz"
  alph += alph.toUpperCase()
  //PART 1
  let found = []
  sortedX.forEach(element => {
    let foundS = []
    let compartment1 = element.slice(0, element.length / 2)
    let compartment2 = element.slice(element.length / 2)

    for (let index = 0; index < compartment1.length; index++) {
      const element1 = compartment1[index];

      for (let index2 = 0; index2 < compartment2.length; index2++) {
        const element2 = compartment2[index2];
        
        if (element1 == element2) {
          if (!foundS.includes(element1)) {
            foundS.push(element1)
          }
        }
      }
    }
    found = found.concat(foundS)
  });

  let points = 0
  found.forEach(element => {
    for (let index = 0; index < alph.length; index++) {
      const element1 = alph[index];
       if (element == element1) {
        points += index + 1 
       }
    }
  });

  //PART2
  return points + ", " + "-------"
}

