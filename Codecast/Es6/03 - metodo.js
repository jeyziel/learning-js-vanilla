const METODO = Symbol('METODO')

const obj = {
    [METODO](txt){
        console.log(txt)
    },
    metodo2(txt){
        console.log(txt)
    },
    metodo3 : function (txt){
        console.log(txt)
    }
}

obj[METODO]('run') 
obj.metodo3('runn')