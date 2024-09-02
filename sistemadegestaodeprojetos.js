// Você trabalha em uma empresa de desenvolvimento de software que gerencia vários projetos simultaneamente. 
// Cada projeto é representado por um objeto contendo as seguintes informações:

const projetos = [
    { id: 1, nome: "Sistema de Pagamentos", horasTrabalhadas: 150, status: "concluído", membros: ["Ana", "Carlos"] },
    { id: 2, nome: "App de Delivery", horasTrabalhadas: 300, status: "em andamento", membros: ["Bruno", "Mariana", "Carlos"] },
    { id: 3, nome: "Site Institucional", horasTrabalhadas: 75, status: "pendente", membros: ["Ana"] },
    { id: 4, nome: "Ferramenta de Analytics", horasTrabalhadas: 200, status: "concluído", membros: ["Mariana", "Carlos"] },
    { id: 5, nome: "Plataforma de Ensino", horasTrabalhadas: 120, status: "em andamento", membros: ["Ana", "Bruno"] }
 ]

// a) Usando a função map, crie um array contendo apenas o nome dos projetos 
// e o número de horas trabalhadas para cada projeto.
const arrayNomesEHoras = projetos.map((projeto) => ({
    NomeProjeto: projeto.nome,
    HorasProjetos: projeto.horasTrabalhadas
}))
console.log(arrayNomesEHoras)

// b) Usando a função filter, crie um array contendo apenas os projetos que estão 'em andamento' 
// e possuem mais de 100 horas trabalhadas.
const arrayAndamento100Horas = projetos.filter((projeto) => projeto.status==='em andamento' && projeto.horasTrabalhadas>100)
console.log(arrayAndamento100Horas)

// c) Usando a função reduce, calcule o total de horas trabalhadas em todos os projetos 'concluídos'.
const projetosConcluidos = projetos.filter((projeto) => projeto.status==='concluído')
const horasTrabalhadasEmProjetosConcluidos = projetosConcluidos.reduce((contador, horas) => contador+horas.horasTrabalhadas, 0)
console.log(projetosConcluidos)
console.log(horasTrabalhadasEmProjetosConcluidos)
