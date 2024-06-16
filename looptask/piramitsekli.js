// piramit sekli

function piramit(say){
for(let i =1; i<=say; i++){
    let umumisay = say- i;
    let ulduzsayi = 2*i-1;
    let result = ' '.repeat(umumisay) + '*'.repeat(ulduzsayi)
console.log(result);
}
}
piramit(15)