// Crie uma função que, ao dar um número de 0 a 9 como argumento, retorne o número por extenso. Porém, o número será escolhido de maneira aleatória.

// Primeira coisa: Criar uma função pura para que um número de 0 a 9 seja representado por extenso. 
const extenso = (a) => {
    if (a == 0) return 'zero'
    else if (a == 1) return 'um'
    else if (a == 2) return 'dois'
    else if (a == 3) return 'três'
    else if (a == 4) return 'quatro'
    else if (a == 5) return 'cinco'
    else if (a == 6) return 'seis'
    else if (a == 7) return 'sete'
    else if (a == 8) return 'oito'
    else if (a == 9) return 'nove'
    else return 'Algarismo não válido!'
}
// Segunda coisa: Criar uma função pura que permita escolher um número ALEATÓRIO de 0 a 9.
const aleatorio = (min, max, x) => {
    const fator = max - min + 1
    return parseInt(x * fator + min)
}
const na = Math.random()
console.log(na)
console.log(extenso(aleatorio(0, 9, na)))
//Observação: Uma função só é pura quando os mesmos argumentos retornam SEMPRE o mesmo resultado, se or agumentos são os mesmo mas há diferença no resultado, é impura. 
