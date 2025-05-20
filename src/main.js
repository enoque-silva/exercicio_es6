const listaAlunos = [
    {
        nome: "Lucas",
        nota: 7.5
    },
    {
        nome: "Mariana",
        nota: 6.0
    },
    {
        nome: "João",
        nota: 9.0
    },
    {
        nome: "Ana Clara",
        nota: 10.0
    },
    {
        nome: "Pedro",
        nota: 5.0
    }
];

const alunosAprovados = listaAlunos.filter((aluno)=>{
    return aluno.nota >= 6;
})

console.log(alunosAprovados);