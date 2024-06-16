// karakter piramidi

function karakterpiramidi(say) {
  const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let piramit = '';
  
  for (let i = 0; i <say; i++) {
      for (let j = 0; j < say - i - 1; j++) {
          piramit += ' ';
      }
      for (let k = 0; k <= i; k++) {
          piramit += karakter[k] + ' ';
      }
      
      piramit += '\n'; 
  }
  console.log(piramit);
}
karakterpiramidi(5);
