function loadUser() {
	return new Promise ( function ( resolve, reject) {
		setTimeout(function(){
			const user = { name: 'jeyziel', id: 21 }
			resolve( user )
		}, 1000)
	} )
}

function loadPosts(  ) {
	return new Promise( function( resolve, reject ) {
		setTimeout(function() {
			const posts = [{id: 1}, {id: 2}, {id: 3}]

			reject( {err: true} )
		}, 2000) 
	})
}

function now () {
	return ( new Date() ).getMilliseconds()
}

console.log( now(), 'Start loading' )

loadUser()
	.then( function ( user ) {
		console.log( now(), user  )
		return loadPosts(  )
	})
	.then( function ( posts ) {
		console.log( now(), posts )
		return posts[0]
	}, function(err) {
		throw err
	})
	.then( function (post) {
		console.log(post)
		console.log( now(), 'Finish loading' )	
	}, function(err){
		console.log(err)
	})

