(function(){
    /*
 Envolva todo o conteúdo desse arquivo em uma IIFE.
 */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
// ?
    var Person = {
        'name' : 'jeyziel',
        'lastname' : 'Gama',
        'age' : 19
    }
    console.log( 'Propriedades de "person":', Object.keys(Person));

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
// ?

    /*
    Crie um array vazio chamado `books`.
    */
// ?
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    var book1 = {
        'name': 'php oo',
        'pages': 500
    }

    var book2 = {
        'name': 'php moderno',
        'pages': 200
    }

    var book3 = {
        'name': 'solid para ninjas',
        'pages': 200
    }

    books.push(book1, book2, book3);




// ?
    console.log( '\nLista de livros:', books);

    /*
    Mostre no console todos os livros.
    */
// ?

    console.log( '\nLivro que está sendo removido:', books.pop() );
    /*
    Remova o último livro, e mostre-o no console.
    */
// ?

    console.log( '\nAgora sobraram somente os livros:', books );
    /*
    Mostre no console os livros restantes.
    */
// ?

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
// ?
    console.log( '\nLivros em formato string:', JSON.stringify(books) );

    /*
    Mostre os livros nesse formato no console:
    */
// ?

    /*
    Converta os livros novamente para objeto.
    */
// ?
    console.log( '\nAgora os livros são objetos novamente:', books );

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
// ?
    for ( var i = 0; i < books.length; i++) {
        for ( prop in books[i] ) {
            console.log('Propriedade ' + prop + "  : " + books[i][prop])
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
// ?
    console.log( '\nMeu nome é:' );
    var myname = [];
    myname.push('j','e','y','z','i','e','l');

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
// ?
    console.log(myname.join(''))

    console.log( '\nMeu nome invertido é:', myname.reverse() );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
//

    console.log( '\nAgora em ordem alfabética:', myname.sort());
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
// ?
}())