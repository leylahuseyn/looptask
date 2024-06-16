// ucgen wekli

const say =10; // girdiyiniz sayiya gore ucgen sekli olusturur

for(let i=1; i<= say; i++){
    let  b="";
    for(let j=1; j<=i; j++){
        b += "*"
    }
    console.log(b);
}

// function ile

function ucgen(say){
    for(let i =1; i<=say; i++){
        let umumisay = say- i;
        let ulduzsayi = 2*i-1;
        let result = ''.repeat(umumisay) + '*'.repeat(ulduzsayi)
    console.log(result);
    } }
 ucgen(15) //sayi degistirile bilir