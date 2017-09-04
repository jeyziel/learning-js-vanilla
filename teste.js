function resto ( A , B ){ 
    var resto = A; 
    var quociente = 0; 
    while( resto >= B ){ 
        resto -= A; 
        quociente++; 
    } 
    return resto;    
}

console.log(resto(  5, 2))