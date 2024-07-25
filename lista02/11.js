// Dados três valores, escreva um programa que retorne quantos desses três valores são maiores que o valor médio entre eles;
const menorNum = (a, b, c) => {
    const media = (a+b+c)/3
    if (a < media) return a
    if (b < media) return b
    if (c < media) return c
    else return a
}
console.log(menorNum(2, 2, 2))
