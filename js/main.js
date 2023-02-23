

const priceKm = 0.21

const myName = document.querySelector('#name');
console.log(myName);

const numeroKm = document.querySelector('#Km');
console.log(numeroKm);


const etaPassegero = document.querySelector('#age');
console.log(etaPassegero);


const prezzo = numeroKm * priceKm;
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



domInput.addEventListener('click',
function () {
    const kmDom = document.getElementById("Km");
    const numeroKmDom =  kmDom.value

    const ageDom = document.getElementById("age");
    const etaPassengerDom =  ageDom.value

}
)