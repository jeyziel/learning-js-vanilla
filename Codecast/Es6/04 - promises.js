function loadUser(callback, onError) {
	setTimeout(function(){
		const user = { name: 'jeyziel', id: 21 }
		callback( user )
	}, 1000)
}

function loadPosts(user, callback, onError) {
	setTimeout(function(){
		const posts = [{id: 1}, {id: 2}, {id: 3}]
		callback( posts )
	}, 2000)
}

function now () {
	return ( new Date() ).getMilliseconds()
}

console.log( now(), 'Start loading' )

function onLoadUser( user ) {
	console.log( now(), user )
	loadPosts( user, onLoadPosts )
}

function onLoadPosts( posts ) {
	console.log( now(), posts)
}

loadUser( onLoadUser )

console.log( now(), 'Finish loading' )