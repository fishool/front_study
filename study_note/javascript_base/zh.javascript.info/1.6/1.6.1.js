// 递归和堆栈
/*
函数会调用 自身。这就是所谓的 递归。
pow(2, 2) = 4
pow(2, 3) = 8
pow(2, 4) = 16
 */

function pow(x, n) {
    if (n === 1) {
        return x;
    }

    return x * pow(x, n-1);
}

console.log(pow(2, 32));
