function getUserData( username ) {
	const url = `https://api.github.com/users/${username}`
	return $.get( url )
}

const users = ['jeyziel'];
const promises = users.map( function( username) {
	return getUserData( username )
} )

Promise
	.all(promises)
	.then( function( users ){
		return users.map( user => user.name) 
	} )
	.then( function( name ){
		console.log(  name )
	} )