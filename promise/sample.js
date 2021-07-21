
function timeout(ms) {
    return new Promise((resolve, reject) => {
        // 延迟调用 resolve，模拟业务操作，resolve 之后 .then 会走下去
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((val)=> {
    console.log(val)
})