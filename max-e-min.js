function gerarA(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}
console.log(gerarA(1, 1000))

// observações:
// A função random escolhe números pseudoaleatórios de 0 a 1
// O parseInt serve para transformar o número decimal em inteiro
// Somar o resultado com min evita que um número abaixo do mínimo seja escolhido