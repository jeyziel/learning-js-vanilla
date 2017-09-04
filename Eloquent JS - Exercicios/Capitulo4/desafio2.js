function range(start,end){
	var sumArray = [];
	for (i = start; i<=end;i++){
        sumArray.push(i);
   	}
    return sumArray;
}

function sumArray(array){
	var sum = 0;
	for (i = 0; i< array.lenght; i++)
	{
		sum += array[i];
	}
	return sum;
}

console.log(sum(range(1,10)));