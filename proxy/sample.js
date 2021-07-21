let obj = new Proxy({}, {
    get: function (target, propKey, receiver) {
        console.log(`getting ${propKey}`);
        return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
        console.log(`setting ${propKey}`);
        return Reflect.set(target, propKey, value, receiver);
    }
})

obj.count = 1
console.log(obj.count)
obj.count = obj.count + 1
console.log(obj.count)