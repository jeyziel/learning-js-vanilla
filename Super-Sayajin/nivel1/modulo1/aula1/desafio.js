const add = ( y ) => ( x ) => x + y

const divide = ( y ) => ( x ) => {
    let result = 0
    const add01 = add(0.1)    
}

const division = (x)=>(y)=>{
      let result  =0;
	  const addresult = add(0.1);
	  const subtractx = subtract(y); 
	  
      x =  multiplya(x)(10);
	  while(x>0){
		  
		  if(subtract(y)(x)<0){
		   return result;
		  }
		  
		  result=addresult(result);
		  x=subtractx(x);
		  
		  }
	 
	  return result;
}

console.log(" 5 / 2" = divide( 2 )( 5 ))