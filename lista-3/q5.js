// Definir uma função que calcula a distância entre dois pontos. 
const distDoisPontos = (x1, y1) => (x2, y2) => {
    const pontoX1X2 = Math.abs(x1-x2)
    const pontoY1Y2 = Math.abs(y1-y2)
    if (x1==x2) return pontoY1Y2 // paralela às ordenadas
    else if (y1==y2) return pontoX1X2 // paralela às abscissas 
    else return Math.sqrt((pontoX1X2**2)+(pontoY1Y2**2)) // fórmula da distância euclidiana entre dois pontos
}

const px1 = 3
const py1 = 4
const px2 = 3
const py2 = 5

console.log(distDoisPontos(px1, py1)(px2, py2))

//Uma outra ideia é usar uma mesma função para calcular a distância da origem para diferentes pontos 
const distDoisPontosOrigem = distDoisPontos(0,0)
console.log(distDoisPontosOrigem(px2, py2).toFixed(2))
