const valores = (a, b, c) => {
    const iguais = (a==b && b==c)
    const diferentes = (a!=b && a!=c && b!=c)
    if (iguais) return 3
    else if (diferentes) return 0
    else return 2
}
console.log(valores(5, 5, 1))
