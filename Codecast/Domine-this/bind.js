function add( a, b) {
	return a + b
}

const add10 = add.bind(undefined,10)

console.log(add10(15))