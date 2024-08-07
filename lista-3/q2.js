const areaCirc = (raio) => (pi=3.14) => pi*(raio**2)

const raio = 5.0

console.log(areaCirc(raio)())
console.log(areaCirc(raio)(Math.PI))
