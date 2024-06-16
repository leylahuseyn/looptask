// fibonacci 

let fibonacci = 1;
let lastnmbr = 1; 
let check = 0;
     
function fibo( deyer){
  
  for( let i=0 ; i < deyer ; i++ ){
    fibonacci = check + lastnmbr;
    check = lastnmbr;
    lastnmbr = fibonacci;
    console.log( fibonacci )
  }
}
fibo(10)