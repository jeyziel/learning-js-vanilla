import { map, reduce, filter } from './Helpers/arrays'

const a = map( [1,2,3,4], x => x*x )
const b = filter( [1,2,3,4], x => x > 2 )

console.log( { a, b } )
