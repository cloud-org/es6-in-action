// 链式调用

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done') 
    }, 1000);
});

p2.then((result) => {
    console.log('result', result)
    return result
}).then((res) => {
    console.log('chain', res)
})
