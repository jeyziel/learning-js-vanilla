const pessoa = {
	andar( passos = 2) {
		console.log(`${this.nome} andou: ${passos}`)
	}
}

const jeyziel = Object.create( pessoa, {
    nome : {
		value: 'jeyziel',
		writable: true
	},
	sobrenome : {
		value: 'gama',
		writable : true	
	},
	nome_comp : {
		get() {
			return `${this.nome} ${this.sobrenome}`
		},
		set( valor ) {
			this.nome = valor 
		}
	},
	idade : {
		value : 18
	}
})


console.log(jeyziel.nome_comp)


