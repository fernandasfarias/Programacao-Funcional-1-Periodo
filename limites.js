// Depois resolver melhor ! 
const calcularLimite = (limite) => (x) => limite(x)

const x = 2
const limite = 1/x
console.log(`Quando o limite for ${limite} o X tende à ${calcularLimite(limite)(x)}`)
