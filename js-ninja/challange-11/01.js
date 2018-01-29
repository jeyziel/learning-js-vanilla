(function(){

    var once = {
        'name' : 'jeyziel',
        'age' : 19,
        'weight' : 100,
        'birthday' : 21
    }

    var counter = 0;

    for ( prop in once) {
        console.log(" the " + prop + " of person is " + once[prop])
        counter++
    }

    console.log("tem " + counter + "  propriedades "  )

    function moreThan( age ) {
       return age < once.age;
    }

    console.log('The person has more than 25 years old? [TRUE/FALSE]', moreThan(25))

    var numbers = [];

    for ( var i = 0; i < 20; i++) {
        numbers.push(i)
        if ( i > 9) {
            break;
        }
    }
    console.log(numbers)

    /*
    Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
    criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
    esses. Se o número for ímpar, pular para o próximo número.
    Mostrar no console os números do array.
    */
    var numbers = [];

    for ( var i = 0; i <= 20; i++ ) {
        if ( i % 2 != 0) {
           continue;
        }

        numbers.push(i)

    }

    console.log(numbers)

}())
