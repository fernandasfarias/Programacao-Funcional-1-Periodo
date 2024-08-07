const PodeSerTri = (a) => (b) => (c) => {
    const somaAB = a+b
    const somaAC = a+c
    const somaBC = b+c
    return (somaAB > c && somaAC > b && somaBC > c)
}

const L1 = 1
const L2 = 2
const L3 = 3

const existTri = PodeSerTri(L1)(L2)(L3)

const boolean = (t) => t? '':'não'

console.log(`Os lados ${L1}, ${L2} e ${L3} ${boolean(existTri)} podem formar um triângulo`)
