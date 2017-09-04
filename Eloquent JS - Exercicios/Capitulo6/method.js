const coelho = {fruta:"cenoura"};
coelho.diz = ( linha ) => console.log("O coelho diz '" + linha + "'");
coelho.diz("Estou vivo")

const speak = function (line) {
	console.log("The " + this.type + " rabbit says '" +
              line + "'")
}
const whiteRabbit = {type: "white", speak: speak}
whiteRabbit.speak("")

speak.apply(whiteRabbit, ["hahaha"])
speak.call({type: "old"}, "Oh my.")


               


