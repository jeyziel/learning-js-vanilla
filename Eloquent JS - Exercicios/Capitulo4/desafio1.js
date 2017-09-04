function range(start,end){
	var sumArray = [];
	for (i = start; i<=end;i++){
        sumArray.push(i);
   	}
    return sumArray;
}

console.write(range(1,10));