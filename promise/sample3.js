const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('fail'))
    }, 3000);
});


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(p1) // p1 的状态才会决定 p2 最终的状态
    }, 1000);
});

p2.then((result) => {
    console.log('result', result)
}).catch((fail) => {
    console.log('fail', fail)
}).finally(()=>{
    console.log('finally close')
})
