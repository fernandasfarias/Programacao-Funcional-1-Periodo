// Questão: Retornar o menor valor de três números mas baseado no sub-problema de comparar dois números
const menorValor = (a) => (b) => a < b? a : b

const a = 4
const b = 8
const c = 7

const resultado = menorValor(a)(menorValor(b)(c))
// Nesse caso, a função menorValor está sendo usada como argumento da mesma função.
// A função menor valor recebe um parâmetro, retorna uma nova função (função anônima)
// que precisa de outro parâmetro. Ela realiza a comparação entre os dois números e depois
// se torna o argumento da função menorValor mais "externa", que também compara os dois argumentos.
console.log(`O menor valor entre os três passados é ${resultado}`)

// Esse tipo de função também serve quando queremos encontrar o maior valor. 
const maiorValor = (x) => (y) => x>y? x:y

const x = 1
const y = 5
const z = 4

const novoResultado = maiorValor(x)(maiorValor(y)(z))
console.log(`O maior valor entre os três passados é ${novoResultado}`)

//É possível reutilizar a função menor (ou maior) para definir outras. 
//Um exemplo interessante é definir a função ReLU (Rectified Linear Unit),que é 
//muito usada em modelos de Aprendizado de Máquina Profundo (Inteligência Artificial)
//O valor dela é igual ao valor passado caso este seja positivo e é igual
//a 0 (zero) quando é negativo. 
//Para isso, vamos definir a função MAIOR semelhante à menor e depois reutilizá-la.
const maior = (x) => (y) => x>y? x : y
const maiorDosTres = maior(a)(maior(b)(c)) 
console.log(`Maior dos três: ${maiorDosTres}`)

//Função reLU
const reLU = maior(0)
console.log(`reLU: ${reLU(a)}`)
