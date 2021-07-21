let promise = new Promise((resolve, reject) => {
    console.log('Promise')
    resolve()
});

promise.then(() => {
    console.log('resolved')
})

console.log('Hi')

//output:
// Promise
// Hi
// resolved
