var proxy = new Proxy({}, {
    get: function (target, propKey) {
        return 35
    }
})

console.log(proxy.time) // 35
console.log(proxy.count) // 35
console.log(proxy.name) // 35