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