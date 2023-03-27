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


class Lancamento {
    constructor(descricao, valor) {
        this.descricao = descricao
        this.valor = valor
    }
}

class CicloFinanceiro {
    cosntructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        let aux_array = []
        lancamentos.forEach(l => aux_array.push(l))
    
        this.lancamentos = aux_array
    }

    sumario() {
        let valorTotal = 0
        this.lancamentos.forEach(l => {
            valorTotal += l.valor
        })

        return valorTotal
    }
}

const salario = new Lancamento('salario', 4500)
const contaDeAgua = new Lancamento('conta de agua', -250)
const contaDeLuz = new Lancamento('conta de lux', -400) // home office ta foda
const rendimentosFundos = new Lancamento('rendimento dos fundos imobiliarios', 800) 

const ciclo = new CicloFinanceiro('maio', 2021)
ciclo.addLancamentos(salario, contaDeAgua, contaDeLuz, rendimentosFundos)
console.log(ciclo.sumario())