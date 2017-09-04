const protoRabbit = {
	fala: function ( linha ) {
		console.log("O coelho " + this.tipo + " fala '" +
                linha + "'");
	}
}

const rabbitAssassin = Object.create( protoRabbit );
rabbitAssassin.tipo = "assasin";
rabbitAssassin.fala("skreee");

const jeyziel = {
	nome : "jeyziel"
}

const sayMyName = function( person ) {
	console.log( person.nome )
}
sayMyName( jeyziel )