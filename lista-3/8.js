const potencia = (e) => (b) => b**e

const quadrado = potencia(2)
const cubo = potencia(3)
const raizquadrada = potencia(1/2)
const quartaPot = potencia(4)

const base = 2

console.log(quartaPot(base))
