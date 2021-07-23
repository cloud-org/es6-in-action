function f(x, y, z) {

}

var args = [0,1,2]
f.apply(null, args)


let args = [0,1,2];
f(...args)

let max_args = [14,3,77]
Math.max.apply(null, max_args)
Math.max(...max_args)
Math.max(14, 3, 77)