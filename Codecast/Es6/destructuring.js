const obj = {
	a: 'a1',
	b : 'b2',
	c : 'c3'
}

function test({ b, a }) {
	console.log(b,a)
}

test(obj)