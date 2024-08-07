const areaGeometrica = forma => {
    if (forma == 'quadrado'){
        return (l) => l*l
    } else if (forma == 'retângulo') {
        return (base, altura) => base*altura
    } else if (forma == 'circuferência') {
        return (raio) => Math.PI * raio * raio
    } else if (forma == 'triângulo') {
        return (base, altura) => (base * altura) / 2
    } else if (forma == 'trapézio') {
        return (baseMaior, baseMenor, altura) => ((baseMaior+baseMenor) * altura) / 2
    } else return 'Esse nome não corresponde à nenhuma das áreas disponíveis'
}

const areaTrapezio = areaGeometrica('trapézio')
console.log(areaTrapezio(5, 2, 2))
console.log(areaGeometrica('elipse'))

// Outra forma: 
const areaGeometrica2 = forma => {
    switch (forma) {
        case 'retângulo':
            console.log('é retangulo')
            break;
        case 'triângulo':
            console.log('é triang')
            break
        default:
            console.log('nao é nenum')
    }
}

areaGeometrica2('losango')