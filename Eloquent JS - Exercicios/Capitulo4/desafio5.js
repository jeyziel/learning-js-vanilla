function reverse (arrayReve)
{
    half = Math.floor(arrayReve.length/2);
  
  
    for (var i = 0;i<half;i++) {
        aux = arrayReve[(half + half)-i];

        arrayReve[(half + half)-i] = arrayReve[i];
        arrayReve[i] = aux;
        
        
        
    }
  
    return arrayReve;

  
}

console.log(reverse([1,2,3,4,5]));