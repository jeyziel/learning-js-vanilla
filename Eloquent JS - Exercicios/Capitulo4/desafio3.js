function range(start,end){
	if(arguments.length == 3)
	{
		var counter = arguments[2];
	}
  
	var sumArray = [];
  
  if(counter < 0) {
    for (var i = end; i>start;i+=counter){
	        sumArray.push(i);
	   	}	
  } 

    return sumArray;
}

console.log(range(1,10,-1));
