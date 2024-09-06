const carrinho = [
    {nome: 'caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'lapis', qtde: 3, preco: 5.85, fragil: false},
    {nome: 'tesoura', qtde: 1, preco: 19.20, fragil: true},
]

// a) Mostrar o carrinho de compras com o preço dos produtos em outra moeda.
const carrinhoGringo = (cambio) => carrinho
    .map(({nome, qtde, preco, fragil}) => {
        const novopreco = preco*cambio
        return {nome,qtde,novopreco,fragil}
    })
console.log(carrinhoGringo(5))

// b) Calcular o valor total gasto com a compra.
// c) Calcular o valor total aplicando-se algum desconto.
// d) calcular o valor total gasto com os produtos frágeis 
// e) Calcular o valor total gasto com produtos que se iniciam com a letra C
// f) calcular o valor médio gasto por tipo de produto com a compra realizada. 
