function hello(x, y) {
    this.x = 3
    return x + y
}

b = hello(3, 2) // apply func
console.log('b is',b)
c = new hello(1, 2) // construct
console.log('c is',c)

