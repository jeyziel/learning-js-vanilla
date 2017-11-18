function loadUser() {
	return new Promise ( function ( resolve, reject) {
		setTimeout(function(){
			const user = { name: 'jeyziel', id: 21 }
			reject( {error: true, msg: 'deu ruim', step : 0} )
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

function onLoadUser(user) {
	console.log( user )
	return user;
}

function onError( err )
{
	console.log(err)
	err.step++;
	throw err
}

loadUser()
	.then(onLoadUser, onError)
	.then(onLoadUser, onError)
	.then(onLoadUser, onError)
	