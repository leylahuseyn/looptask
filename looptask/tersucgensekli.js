// tersucgen sekli

function tersucgen(say){
    for(let i=1; i<=say; i++){
        let umumisay = say-i;
        let result = "*".repeat(umumisay)
        console.log(result);
    }
}
tersucgen(10)  //girdiyiniz sayiya gore ters piramit olusturur