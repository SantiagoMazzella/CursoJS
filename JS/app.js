const remera = 1150;
const jean = 2200;
const campera = 7500;

const cuotasRemera = remera / 12;
const coutasJean = jean / 12;
const cuotasCampera = campera / 12;

let compra = Number(prompt(`Bienvenido, que desea comprar?
1. Remera $1150
2. Jean $2200
3. Campera $7500
4. Nada`));

if (compra == 1) {
    let pago = Number(prompt(`¿Como desea abonar su remera? 
    1. Efectivo
    2. 12 cuotas`));
    if(pago == 1){
        alert("Su compra fue realizada con exito")
    } else if (pago == 2) {
        alert(`Perfecto!, usted pagara 12 cuotas de ${cuotasRemera}`)
    }   
} else if (compra == 2) {
    let pago = Number(prompt(`¿Como desea abonar su Jean? 
    1. Efectivo
    2. 12 cuotas`));
    if(pago == 1){
        alert("Su compra fue realizada con exito")
    } else if (pago == 2) {
        alert(`Perfecto!, usted pagara 12 cuotas de ${coutasJean}`)
    }  
} else if (compra == 3) {
    let pago = Number(prompt(`¿Como desea abonar su Campera? 
    1. Efectivo
    2. 12 cuotas`));
    if(pago == 1){
        alert("Su compra fue realizada con exito")
    } else if (pago == 2) {
        alert(`Perfecto!, usted pagara 12 cuotas de ${cuotasCampera}`)
    }  
} else if (compra == 4) {
    alert("Gracias, vuelva pronto");
} else {
    alert("Respuesta invalida, dijite el numero de la opccion porfavor");
}