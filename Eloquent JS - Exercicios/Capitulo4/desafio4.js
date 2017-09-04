function reverse (arrayReve)
{
    var arrayReverse = [];
  
    for (var i = 0;i<arrayReve.length;i++) {
        arrayReverse.unshift(arrayReve[i]);
     
    }
  
    return arrayReverse;

  
}

console.log(reverse([1,2,3,4]));