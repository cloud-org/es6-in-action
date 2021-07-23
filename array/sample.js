console.log(...[1,2,3])
console.log(1, ...[2,3,4], 5)


function add(x, y) {
    return x + y
}

const numbers = [4, 38]
numbers[0] = 3;
console.log('add res', add(...numbers))