// sayi piramidi sekli

function sayiPiramidi(say) {
    let umumisay = 1;
    let bosluksayi = ' ';
    for (let i = 1; i <= say; i++) {
        let bosluk = '';  
    for (let b = 1; b <= say - i; b++) {
            bosluk += bosluksayi;
        }
     for (let s = 1; s <= i; s++) {
            bosluk += umumisay + ' ';
            umumisay++;
        }
        console.log(bosluk);
    }
}
sayiPiramidi(3)
