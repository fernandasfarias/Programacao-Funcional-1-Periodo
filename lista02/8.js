// Escrever um programa que calcule o valor de um número elevado à quarta potência. Tente fazer uso do sub-problema de calcular o quadrado de um número qualquer.
const pot = (a, b) => a**b
const quartaPot = (c) => pot(c, 4)
console.log(quartaPot(2))
