

const priceKm = 0.21
const numeroKm = parseInt (prompt('Quanti Km devi percorrere?'));
console.log(numeroKm);

const etaPassegero = parseInt (prompt('Quanti anni hai?'));
console.log(etaPassegero);


let prezzo = numeroKm * priceKm;
console.log(prezzo);

let discountOver = (prezzo * 0.4)
let discountUnder = (prezzo * 0.2)

if(etaPassegero > 64){
    console.log( prezzo = prezzo - discountOver
    )
    
}

else if(etaPassegero < 18){
    console.log( prezzo = prezzo - discountUnder 
    )
    
}

else{
    console.log(prezzo)
}

document.getElementById('prezzo').innerHTML = (prezzo.toFixed(2))



