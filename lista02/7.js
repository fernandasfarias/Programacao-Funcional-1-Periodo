const menorNum = (a, b, c) => {
    if (a < b && a < c) return a
    else if (b < a && b < c) return b
    else if (c < a && c < b) return c
    else return a
}
console.log(`O menor número é ${menorNum(5,5,5)}`)
