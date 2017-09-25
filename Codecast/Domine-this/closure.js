function add( a, b) {
	return a + b;
}

function bindAdd( a ) {
	return function (b) {
		return add( a, b )
	}
}

const add10 = bindAdd(10)(25)
console.log(add10)