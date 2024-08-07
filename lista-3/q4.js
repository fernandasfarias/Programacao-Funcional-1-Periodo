const PodeSerTri = (a) => (b) => (c) => {
    const somaAB = a+b
    const somaAC = a+c
    const somaBC = b+c
    return (somaAB > c && somaAC > b && somaBC > c)
}
const tipoTri = (a) => (b) => (c) =>{
    if (a==b && a==c) return 'equilátero'
    else if (a!=b && a!=c && b!=c) return 'escaleno'
    else return 'isósceles'
}

const L1 = 1
const L2 = 2
const L3 = 3

if (PodeSerTri(L1)(L2)(L3)){
    console.log(`Os lados ${L1}, ${L2} e ${L3} formam um triângulo de tipo ${tipoTri(L1)(L2)(L3)}.`)
} else{
    console.log('Não é um triângulo')
}
