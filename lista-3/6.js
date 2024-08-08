// Primeira forma:
const quantosValoresIguais = (a) => (b) => (c) => {
    const todosIguais = (a==b) && (b==c)
    const doisIguais = (a==b) || (a==c) || (b==c)
    const nenhumIgual = (a!=b) && (a!=c) && (b!=c)
    if (todosIguais) return 'Todos iguais'
    else if (doisIguais) return 'Apenas um diferente'
    else if (nenhumIgual) return 'Todos diferentes'
}
const a = 126894567882
const b = 345
const c = 126894567882

console.log(quantosValoresIguais(a)(b)(c))

// Forma mais simplificada (sem declarar constantes):
const quantosIguais = (a) => (b) => (c) => {
    if (a==b && b==c) return 'Todos iguais'
    else if (a!=b && b!=c && a!=c) return 'Todos diferentes'
    else return 'Apenas um diferentes'
}
console.log(quantosIguais(56)(56)(56))
