
const hola = prompt(`¿Cuantos "Hola" desea?`);

for (let i = 0; i < hola; i++) {
    alert("hola")
}

const numero = Number(prompt("¿La tabla de que numero quiere ver?"));


for (let i = 1; i <= 10; i++){
    let resultado = i * numero;
    alert(`${resultado}`)
}


let entrada = prompt("Ingrese un texto o ESC para interrumpir");

let texto = " "

while (entrada != "ESC" && entrada != "esc"){
    texto += entrada + " ";
    entrada = prompt("Ingrese un texto o ESC para interrumpir");
}

alert(texto);