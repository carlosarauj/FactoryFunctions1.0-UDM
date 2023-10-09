function pessoa(nome,sobrenome){
    return{
        nome,
        sobrenome,
        say(frase){
            return `ola ${this.nome} ${frase}, `
        }
    }
}

let p1  = pessoa('Carlos', 'Araújo')
let p2 = pessoa('Lucas', 'Moura')
console.log(p2.say('tudo bem?'))