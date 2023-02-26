const generateTicketDom = document.getElementById('generaTicket')

const nameDom = document.getElementById('name');

const ageDom = document.getElementById('age');
const kmDom = document.getElementById('km');
const ticketNameDom = document.getElementById('ticketName');
const discountDom = document.getElementById('discount');
const wagonDom = document.getElementById('wagon');
const resetFormDom = document.getElementById('resetForm')
const yourTicketDom = document.getElementById('yourTicket')
const ticketPriceDom = document.getElementById('ticketPrice')







const priceKm = 0.21;


generateTicketDom.addEventListener('click', 
function(){

    const name = nameDom.value
    const km = parseInt (kmDom.value)
    const age = ageDom.value

    let price = km * priceKm

    if (age == "minorenne"){
        price = price - (price * 0,2)
        discountDom.innerHTML = "Young"

    }

     else if(age == "senior"){

        price = price - (price * 0,4)
        discountDom.innerHTML = "Sconto silver"

    }
    else {
        discountDom.innerHTML = "Prezzo pieno"

    }



    yourTicketDom.classList.remove('d-none')

    ticketNameDom.innerHTML = name;

    ticketPriceDom.innerHTML = `${price.toFixed(2)} euro`

    const wagon = Math.floor(Math.random() * 20) + 1;
    wagonDom.innerHTML = wagon;



}
);

resetFormDom.addEventListener('click',
function(){
    yourTicketDom.classList.add('d-none')
    nameDom.value = ""
    kmDom.value = ""
    ageDom.value = ""
})

