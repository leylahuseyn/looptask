// cerceve sekli 

function cerceve(say) {
    for (let b = 1; b < say; b++){
     if (b == 1 || b == say - 1){
        console.log('* '.repeat(say - 1) + '*')
        } else {
            console.log('*' + ' '.repeat((say - 2) * 2 + 1) + '*')
        };
    }
}
cerceve(10
); 