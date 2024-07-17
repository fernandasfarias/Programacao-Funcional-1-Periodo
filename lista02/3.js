function existTri(a, b, c){
    if (Math.abs(a-b) < c && c < (a+b) &&
        Math.abs(a-c) < b && b < (a+c) &&
        Math.abs(b-c) < c && c < (b+c)) {
        return `Com os valores ${a}, ${b} e ${c} podemos formar um triângulo.`
    } else {
        return `Com os valores ${a}, ${b} e ${c} não podemos formar um triângulo.`
    }
}
console.log(existTri(1, 2, 3))
