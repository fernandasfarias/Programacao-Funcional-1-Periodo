// programa para classificar o triângulo em Equilátero, Isósceles ou Escaleno a partir dos valores de seus três lados. 

// Determinar uma constante que verifica o tipo do triângulo
const tipo = (a, b, c) => {
    const iguais = a==b && b==c
    const diferentes = a!=b && a!=c && b!=c
    if (iguais) return 'Equilátero' // retorna um valor boleano - True or False
    else if (diferentes) return 'Escaleno' // retorna um valor boleano 
    else return 'Isósceles'
}
const podeSer = (a, b, c) => {
    const somaAB = a+b
    const somaAC = a+c
    const somaBC = b+c
    return (somaAB > c && somaAC > b && somaBC > a)
}
if (podeSer(1, 2, 3)){
    console.log(`Esse triângulo é ${tipo(5, 4, 3)}`)
} else {
    console.log('Não é um triângulo.')
}
