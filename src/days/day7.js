export default function day7(input) {
  const commands = input.slice(0, -1).split("\n");
  let wholeSize = 0
  let path = []
  let tree = []
  for (let index = 0; index < commands.length; index++) {
    const command = commands[index];
    if (!(command.startsWith('$') || command.startsWith('dir'))) {
      wholeSize += parseInt(command.split(" ")[0])
    }
    if (command.startsWith('$')) {
        const operation = command.split(" ")[1]
        switch (operation) {
            case 'cd':
                switch (command.split(' ')[2]) {
                    case '/':
                        path = []
                        break;
                    case '..':
                        path.pop()
                        break;
                    default:
                        path.push(command.split(' ')[2])
                        break
                }
                break;
            case 'ls':
                let contextContent = []
                for (let index2 = index + 1; index2 < commands.length; index2++) {
                    const nextLines = commands[index2];
                    if (nextLines.startsWith('$')) {
                        break
                    }
                    let type
                    let size
                    let name
                    if (nextLines.startsWith('dir')) {
                        type = 'directory'
                        size = 0
                        name = nextLines.split(' ')[1]
                    } else {
                        type = 'file'
                        size = parseInt(nextLines.split(' ')[0])
                        name = nextLines.split(' ')[1]
                    }
                    contextContent.push({
                        type: type,
                        size: size,
                        name: name
                    })
                    
                }
                tree.push({
                    path: structuredClone(path),
                    content: contextContent
                })
                break;
        }
    }     
  }

  tree.sort((a, b) => a.path.length - b.path.length);
  tree.reverse()

  let dSizes = []
  tree.forEach(dir => {
    let size = 0;
    dir.content.forEach(oneContent => {
        if (oneContent.type == "file") {
            size += oneContent.size;
        } else {
            let dSize = dSizes.find(d => d.path.join("/") === dir.path.concat(oneContent.name).join("/"));

            if (dSize) {
                size += dSize.size;
            }
        }
    });
    dSizes.push({
        path: dir.path,
        size: size
    });
  })

  dSizes.sort((a, b) => {
    if (a.size < b.size) {
        return -1;
    } else if (a.size > b.size) {
        return 1;
    } else {
        return 0;
    }
  });

  let sizes = []
  dSizes.forEach(dir =>{
    sizes.push(dir.size)
  })

  let finSize = 0
  dSizes.forEach(dir => {
    
    if (dir.size < 100000) {
        finSize += dir.size
    }
    
  });

  //Part 2
  let toDel = 30000000 - (70000000 - wholeSize)
  let closest = 70000000
  sizes.forEach(num => {
    if (num >= toDel && num < closest) {
      closest = num
    }
  })

  return finSize + ", " + closest
}