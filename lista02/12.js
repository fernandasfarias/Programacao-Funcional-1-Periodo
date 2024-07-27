const raizes = (a, b, c, r) => {
    if (r == 1) return (-b + Math.sqrt(b**2 - 4*a*c)) / 2*a
    else if (r == 2) return (-b - Math.sqrt(b**2 - 4*a*c)) / 2*a
}
console.log(raizes(1, 6, 5, 2))
// Para os mesmos argumentos, se o valor sempre for o mesmo, então a função é pura. 