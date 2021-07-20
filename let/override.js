var tmp = new Date();

function f() {
    console.log(tmp);
    if (false) {
        // 出现变量提升, 导致外层 tmp 变量被替换
        // 这里走不到
        var tmp = 'hello world';
    }
}

f(); // undefined