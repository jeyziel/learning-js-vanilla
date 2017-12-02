console.log( /abc/.test("abcde"))
//truee
console.log( /abc/.test("12345"))
//false
console.log( /[0123456789]/.test("ano 1992") );
// → true
console.log( /[0-9]/.test("ano 1992") );
// → true

var dataHora = /\d\d\/\d\d\/\d{4} \d\d:\d\d/;
console.log( dataHora.test("30/01/2003 15:20") );
// → true
console.log( dataHora.test("30/jan/2003 15:20") );
// → false

var naoBinario = /[^01]/;
console.log( naoBinario.test("01101") );
// → false
console.log( naoBinario.test("01201") );



// /abc/	Sequência de caracteres
// /[abc]/	Qualquer caractere do conjunto
// /[^abc]/	Qualquer caractere que não seja do conjunto
// /[0-9]/	Qualquer caractere no intervalo de caracteres
// /x+/	Uma ou mais ocorrências do padrão
// /x+?/	Uma ou mais ocorrências do padrão, não obrigatório
// /x*/	Zero ou mais ocorrências
// /x?/	Zero ou uma ocorrência
// /x{2,4}/	Entre duas e quatro ocorrências
// /(abc)+/	Agrupamento
// /a|b|c/	Padrões alternativos
// /\d/	Caracteres dígitos
// /\w/	Caracteres alfanuméricos ("caracteres palavra")
// /\s/	caracteres espaço em branco
// /./	Todos caracteres exceto quebras de linha
// /\b/	Limite de palavra
// /^/	Início da entrada
// /$/	Final da Entrada