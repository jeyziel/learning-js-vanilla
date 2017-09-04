const add=(x)=>(y)=>x+y
const subtract =(y)=>(x)=>add(x)(-y)

const multiplya =(y)=>(x)=>{ 
      let result = 0
	  const addx = add(x)
	  const subtracty = subtract(1)
     while(y>0){
		  result=addx(result)
		  y=subtracty(y)
	 }	
    return result;	 
}

//  desafio  5/2 = 2.5;//

const division = (x)=>(y)=>{
      let result  =0
	  const addresult = add(0.1)
	  const subtractx = subtract(y);
	  
      x =  multiplya(x)(10)
	  while(x>0){
		  
		  if(subtract(y)(x)<0){
		   return result;
		  }
		  
		  result = addresult(result)
		  x = subtractx(x)
		  
		  }
	 
	  return result;
}
console.log(division(5)(2)) 
console.log(division(1)(2))