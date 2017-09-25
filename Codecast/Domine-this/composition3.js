const caminhante = {
    andar( passos = 2 ) {
        console.log(`${this.nome} andou ${passos} passos`)
    },
    correr( passos = 2 ) {
        console.log(`${this.nome} correu ${passos} passos`)
    }
}

const falante = {
    falou( palavras ) {
        console.log(`${this.nome} falou : ${palavras}`)
    },
    gritou( passos = 2 ) {
        console.log(`${this.nome} gritou : ${palavras}`)
    }
}

const pitter = Object.assign({nome : 'pitter'}, caminhante)

const jeyziel = Object.assign({nome: 'jeyziel'}, caminhante, falante)

pitter.correr(100)

jeyziel.falou('merda')