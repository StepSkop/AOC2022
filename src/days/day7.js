export default function day7(inputY) {
  let curentDir = 0
  let dirs = []
  let path = []
  let countedDirs = []
  let inputLines = inputY.split('\n').slice(0,-1)
  for (let index = 0; index < inputLines.length; index++) {
    const element = inputLines[index];
    if (element.includes('$ cd')) {
      switch (element.split('$ cd ')[1]) {
        case '/':
          curentDir = 0
          break;
        case '..':
          curentDir--
          path.slice(0, -1)
          break
        default:
          curentDir++
          path.push(element.split('$ cd ')[1])
          break;
      }
    }else if (element.includes('dir ')) {
      continue
    }else if (element.includes('$ ls')) {
      continue
    }
    else {
      let size = element.split(" ")[0]
      let dirContent = []
      dirContent.push(curentDir)
      dirContent.push(path)
      dirContent.push(size)
      dirs.push(dirContent)
    }
  }

  const sortedArray = [...dirs].sort((a, b) => a[0] - b[0]);
  let actualDir = sortedArray[0][0]

  for (let index = 0; index < sortedArray.length; index++) {
    const element = sortedArray[index];

    while (element[0] == actualDir) {
      console.log(element[0]);
    }
    actualDir = sortedArray[i]
    i--
    // let dirSize = 0
    // if ((element[0] === actualDir) && (element[1] === sortedArray[index + 1][1])) {
    //   let dirContent = []
    //   dirContent.push(element[0]-1)
    //   dirContent.push(element[1].pop())
    //   dirContent.push(dirSize + sortedArray[index + 1])
  }
  console.log(sortedArray[0]);
  console.log(sortedArray[1]);
  return 'OK'
      
}
//0-root 1-a 2-b 3-c 4-d 5-e 6-f 7-g 8-h