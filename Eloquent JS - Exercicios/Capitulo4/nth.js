function arrayToList(array) {
	var list = null;
	for (var i = array.length - 1; i >= 0;i--) {
		list = {
			value : array[i], 
			rest: list
		};
	}

	return list;
}

function nth( list,n ) {
    if(n === 0) {
        return list.value
    }
    
    if (list.rest !== null){
        return nth(list.rest,n-1);
    }

    return undefined;
    
}

console.log(nth(arrayToList([10, 20, 30]), 2));