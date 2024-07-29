// distância entre dois pontos, independentes da orientação
const distPontos = (x1, y1, x2, y2) => Math.sqrt(((x2-x1)**2 + (y2-y1)**2))

// distância entre um ponto e reta quando a reta não é paralela a nenhum eixo
const distPontoReta = (A, B, C, x0, y0) => Math.abs(A*x0 + B*y0 + C)/Math.sqrt(A**2 + B**2)

console.log(distPontos(1, 2, 4, 6))
console.log(distPontoReta(2, 3, -6, 1, 2))
