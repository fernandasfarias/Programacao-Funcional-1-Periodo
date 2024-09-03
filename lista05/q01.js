// array de objetos
const carrinho = [
    {nome: 'caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'caderno', qtde: 4, preco: 5.82, fragil: false},
    {nome: 'lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'tesoura', qtde: 1, preco: 19.20, fragil: true},
]

// a) Mostrar o carrinho de compras com o preço dos produtos em outra moeda.
const carrinhoDolar = carrinho.map((x) => ({
    nome: x.nome,
    qtde: x.qtde,
    preco: (x.preco*5.5).toFixed(2),
    fragil: x.fragil
}))
console.log(carrinhoDolar)
console.log(carrinho)

// b) Calcular o valor total gasto com a compra.
const parcialMult = (carrinho) => carrinho.qtde*carrinho.preco
const valorTotalDaCompra = carrinho.map(parcialMult).reduce((contador, valor) => contador+valor, 0)
console.log(valorTotalDaCompra)

// c) Calcular o valor total aplicando-se algum desconto.
// como eu fiz: Decidi aplicar um desconto de 20% apenas nos produtos que são considerados frágeis.
const desconto20ProdutosFrageis = carrinho.map((z) => z.fragil? z.preco*0.8:z.preco)
console.log(desconto20ProdutosFrageis)
const valorTotalComDesconto = desconto20ProdutosFrageis.reduce((contador, valor) => contador+valor, 0)
console.log(valorTotalComDesconto.toFixed(2))


// apliquei um desconto de 15% em cada um dos produtos
const desconto15CadaProduto = carrinho.map((valor) => (valor.preco*0.85).toFixed(2))
const valorTotalCom15Desconto = desconto15CadaProduto.reduce((contador, valor) => contador+valor, 0)
console.log(desconto15CadaProduto)
console.log((valorTotalComDesconto).toFixed(2))

// Aplicando um desconto de 30% no valor final da compra
const desconto30 = valorTotalDaCompra*0.7
console.log(`O valor final com um desconto de 30% ficou igual a: R$ ${desconto30}`)

// d) calcular o valor total gasto com os produtos frágeis 
const produtosFrageis = carrinho.filter((produtofragil) => produtofragil.fragil)
console.log(produtosFrageis)
const valorTotalComProdutosFrageis = produtosFrageis.reduce((contador, y) => contador+y.qtde*y.preco, 0)
console.log(valorTotalComProdutosFrageis)

// e) Calcular o valor total gasto com produtos que se iniciam com a letra C
const produtosQueIniciamComLetraC = carrinho.filter((letra) => letra.nome[0]==='c')
console.log(produtosQueIniciamComLetraC)
const valorTotalProdutosLetraC = produtosQueIniciamComLetraC.reduce((cont, val) => cont+val.qtde*val.preco, 0)
console.log(valorTotalProdutosLetraC)
