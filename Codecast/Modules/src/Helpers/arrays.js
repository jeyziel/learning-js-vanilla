// const map = ( arr, fn ) => arr.map( fn )
//
// export default map
export const map = ( arr, fn ) => arr.map( fn )
export const reduce = ( arr, init, fn ) => arr.reduce( fn, init )
export const filter = ( arr, fn ) => arr.filter( fn )


export default { map, reduce, filter }
