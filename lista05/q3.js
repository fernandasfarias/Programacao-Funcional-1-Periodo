// 3 - Make a program to return the number of elements from a list. 
const booksRegisters = [
    {book:'How To Kill a Mockingbird', writer: 'Harper Lee', pages: 349, price: 53.04},
    {book: 'Jane Eyre', writer: 'Charlotte Bronte', pages: 780, price: 46.00},
    {book: 'Anna Kariênina', writer: 'Liev Tolstói', pages: 808, price: 88.00}
]

console.log(`The amount of books registered: ${booksRegisters.length}`)

const myName = 'Fernanda Silva Farias'
console.log(`The length of my own name (with spaces) is: ${myName.length}`)

const amountBooksRegisters = booksRegisters.reduce((acc, x) => acc+1, 0)
console.log(`The amount of books registered: ${amountBooksRegisters}`)

list1 = ['Programação Funcional', 'Vetores', 'Cálculo A', 'Seminários em Computação', 'Introdução à Administração']
console.log(`The number of subjects in my first semester is: ${list1.reduce((acc, x) => acc+1, 0)}`)
