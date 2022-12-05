export default function day3(x) {
    let sortedX = x.split('\n')
    sortedX = sortedX.slice(0, -1)
  
    let alph = "abcdefghijklmnopqrstuvwxyz"
    alph += alph.toUpperCase()
    //PART 1
    let found = []
    let found2 = []
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
    let sortedY = x.split("\n")
    for (let index = 0; index < sortedX.length; index += 3) {
    let foundT = []
    const element = sortedX[index];
    const element1 = sortedX[index + 1]
    const element2 = sortedX[index + 2]
    

    for (let index = 0; index < element.length; index++) {
      const letter = element[index];
      if (element1.includes(letter) && element2.includes(letter)) {
        if (!foundT.includes(letter)) {
          foundT.push(letter)
        }   
      }
    }
    found2 = found2.concat(foundT)
    }
    let points2 = 0
    found2.forEach(element => {
      for (let index = 0; index < alph.length; index++) {
        const element1 = alph[index];
         if (element == element1) {
          points2 += index + 1 
         }
      }
    });

    return points + ", " + points2
  }