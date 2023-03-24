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


function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }, 1000);
}

new Pessoa