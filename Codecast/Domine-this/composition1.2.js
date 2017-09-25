const pessoa = {
	andar( passos = 2) {
		console.log(`${this.nome} andou: ${passos}`)
    },
    
    envelhecer( anos = 1 ) {
        this.idade += anos
    }
}

function createPessoa( nome, idade ) {
   return Object.create( pessoa, {
        nome : {
            value: nome,
            writable: true
        },
        idade : {
            value : 18,
            writable: true
        }
    })
}

const jeyziel = createPessoa( 'jeyziel gama', 18 )
jeyziel.envelhecer()


console.log(jeyziel.idade)



