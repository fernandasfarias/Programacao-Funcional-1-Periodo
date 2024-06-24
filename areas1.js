// Crie um programa que calcule a soma das áreas de duas figuras geométricas distintas: Um retângulo e uma elipse.

// Declarar uma função que calcula a área do retângulo:
function farearet(x, y) {
    return x*y
}

// Nota 1: Ao declarar uma função eu estou passando PARÂMETROS.

// Declarar uma função que calcula a área da elipse:
function fareaeli(x, y) {
    const pi = 3.1415
    return x*y*pi
}

// Declarar uma função que calcula a soma
function fsoma(x, y) {
    return x+y
}

// Dados - Pré-determinados ou fornecido pelo usuário
const L1 = 5
const L2 = 9
const R1 = 2
const R2 = 4

// calcular o valor da área através da APLICAÇÃO DA FUNÇÃO
const A1 = farearet(L1, L2)
const A2 = fareaeli(R1, R2)
  // Agora, como estamos aplicando uma função, passamos os ARGUMENTOS

// Resultado final 
console.log(fsoma(A1, A2))
