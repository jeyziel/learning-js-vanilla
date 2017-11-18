function Coelho( tipo ) {
    this.tipo = tipo
}

const coelhoAssasino = new Coelho("assassino")
Coelho.prototype.fala = function( linha ){
    console.log(`Ò coleho ${this.tipo} fala ${linha}`)
} 

console.log( coelhoAssasino.tipo )
coelhoAssasino.fala("lalalala")