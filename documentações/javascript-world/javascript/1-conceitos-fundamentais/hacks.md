## Tudo que estiver em %s sera impresso, seguindo a ordem do log
console.log('manager.__proto__: %s, manager.salary(): %s', new Manager().__proto__, new Manager().salary())

## Pegando todos os arguments passados para uma função

class File1 {
  watch(event, filename) {
    console.log(arguments)
  }
}

const File2 = {
  watch:(arg1,arg2,arg3) => {
    console.log(arguments)
  }
}

const File3 = (arg1,arg2) => {
  console.log(arguments)
}

File3(1, 2, 2)

{
    "0": 1,
    "1": 2,
    "2": 2
}