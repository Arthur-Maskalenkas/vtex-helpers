# Pegando todos os argumentos passados para uma função
# hack Pegando todos os argumentos passados para uma função

```javascript
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
```