// function destructuringObg({min = 0, max = 1000} = {min: 0, max: 1000}) {
//     return Math.floor(Math.random() * (max - min) + min)
// }

// console.log(destructuringObg({min: 40, max: 50}))
// console.log(destructuringObg())

// function desctructuringArray([min = 0, max = 1000]) {
//     return Math.floor(Math.random() * (max - min) + min)
// }

// console.log(desctructuringArray([1, 10]))



//------------------------------------------------------------------------------------//



// function test(func, number) {
//     if (number > 10) {
//         func() 
//     } else {
//         console.log('dale') 
//     }
// }

// test(() => {
//     console.log('provavel')
// }, 11)


//------------------------------------------------------------------------------------//


// function Pessoa() {
//     this.idade = 0

//     setInterval(function() {
//         this.idade++
//         console.log(this.idade)
//     }, 1000);
// }

// new Pessoa


//------------------------------------------------------------------------------------//


// class Lancamento {
//     constructor(descricao, valor) {
//         this.descricao = descricao
//         this.valor = valor
//     }
// }

// class CicloFinanceiro {
//     cosntructor(mes, ano){
//         this.mes = mes
//         this.ano = ano
//         this.lancamentos = []
//     }

//     addLancamentos(...lancamentos) {
//         let aux_array = []
//         lancamentos.forEach(l => aux_array.push(l))
    
//         this.lancamentos = aux_array
//     }

//     sumario() {
//         let valorTotal = 0
//         this.lancamentos.forEach(l => {
//             valorTotal += l.valor
//         })

//         return valorTotal
//     }
// }

// const salario = new Lancamento('salario', 4500)
// const contaDeAgua = new Lancamento('conta de agua', -250)
// const contaDeLuz = new Lancamento('conta de lux', -400) // home office ta foda
// const rendimentosFundos = new Lancamento('rendimento dos fundos imobiliarios', 800) 

// const ciclo = new CicloFinanceiro('maio', 2021)
// ciclo.addLancamentos(salario, contaDeAgua, contaDeLuz, rendimentosFundos)
// console.log(ciclo.sumario())


//------------------------------------------------------------------------------------//


// let aprovados = {
//     primeiro: 'bia',
//     segundo: 'joao',
//     terceiro: 'renato'
// }

// console.log(aprovados['primeiro'])
// console.log(aprovados.terceiro)

// aprovados = ['Bia', 'Joseph', 'Jonnathan']
// aprovados.push('Tust Acto 4')
// aprovados.splice(1, 1, 'elemento 1') // (a_partir_deste, exclua_essa_quantidade, ...novos_elemntos)
// console.log(aprovados)


//------------------------------------------------------------------------------------//


// const atletas = ['Roberto', 'Ronaldo', 'Juliano', 'Cristiano']
// atletas.pop() // remove o ultimo
// atletas.shift()// remove o primeiro

// console.table(atletas)

// atletas.push('Neto') // adiciona no ultimo
// atletas.unshift('Damiao') // adiciona no inicio

// console.table(atletas)


//------------------------------------------------------------------------------------//


// const aprovados = ['Agatha', 'Anthony', 'Diego', 'Gabriel', 'Zelio']

// Array.prototype.forEach2 = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this)
//     }
// }

// aprovados.forEach2((nome, index) => {
//     console.log(`${index + 1}) ${nome};`) 
// })

// const aprovadacos = aprovados.map((apr) => {
//     return apr+' !!PARABENS!!'
// })

// console.log(aprovadacos)


//------------------------------------------------------------------------------------//


Array.prototype.map2 = function(callback) {
    const array = []
    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[i], i, this))
    }
    return array
}

const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "lapis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.45 }'
]

console.log(carrinho.map2((item) => {
    return JSON.parse(item).preco
}))


//------------------------------------------------------------------------------------//


Array.prototype.filter2 = function(callback) {
    const array = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            array.push(this[i])
        }
    }
    return array
}

const produtos = [
    { nome:'Notebook', preco:5000, fragil:true },
    { nome:'Smartphone', preco:4200, fragil:true },
    { nome:'Copo de Vidro', preco:15.99, fragil:true },
    { nome:'Copo de plástico', preco:13.00, fragil:false }
]

console.log(produtos.filter2((single_product) => {
    return single_product.fragil === true && 
           single_product.preco < 500
}))


//------------------------------------------------------------------------------------//


const alunos = [
    { nome:'Amanda', nota:7.5, bolsista: true },
    { nome:'Antony', nota:5.5, bolsista: false },
    { nome:'Daniel', nota:2.1, bolsista: true },
    { nome:'Douglas', nota:10.0, bolsista: false },
    { nome:'Romario', nota:6.7, bolsista: true },
]

let result = alunos.map(aluno => aluno.nota).reduce(
    function(acumulador, nota_atual) {
        console.log(acumulador, nota_atual)
        return acumulador + nota_atual
    }
)

// Desafio: todos os alunos são bolsistas ?
result = alunos.map(aluno => aluno.bolsista)
.reduce((acc, bolsista) => acc && bolsista)
console.log(`Todos os alunos são bolsistas: ${result}`)

// Desafio: algum aluno é bolsista ?
result = alunos.map(aluno => aluno.bolsista)
.reduce((acc, bolsista) => acc || bolsista)
console.log(`Algum aluno é bolsista: ${result}`)

// Desafio Bonus: Algum aluno reprovou, quais ? (nota minima = 6)
result = alunos.filter((aluno) => {
    return aluno.nota <= 6
})
console.log('Alunos reprovados:')
console.table(result)


//------------------------------------------------------------------------------------//


Array.prototype.reduce2 = function(callback) {
    let acc = this[0]
    for (let i = 1; i < this.length; i++) {
        acc = callback(acc, this[i], i, this)
    }
    return acc
}

const array = [1,2,3,4,5,6]
console.log(array.reduce2((acc, element) => acc + element))


//------------------------------------------------------------------------------------//
console.log('-------------------------------------')


const escola = [{
    turma: 'turma 1',
    alunos: [{
        nome: 'gustavo',
        nota: 8.7
    }, {
        nome: 'ana',
        nota: 9
    }]
},{
    turma: 'turma 2',
    alunos: [{
        nome: 'Rebeca',
        nota: 6.0
    }, {
        nome: 'Arthur',
        nota: 4.2
    }]
}]

const getNota = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNota)
const getNotasEscola = escola => escola.map(getNotasTurma)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

console.log(escola.flatMap(getNotasTurma))
