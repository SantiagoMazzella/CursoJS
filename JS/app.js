
const hola = prompt(`¿Cuantos "Hola" desea?`);

for (let i = 0; i < hola; i++) {
    alert("hola")
}

const numero = prompt("Repeticion de numeros: ¿Cuantos numeros desea ver?")

for (let i = 1; i <= numero; i++){
    alert(`${i}`)
}


let entrada = prompt("Ingrese un texto o ESC para interrumpir");

let texto = " "

while (entrada != "ESC" && entrada != "esc"){
    texto += entrada + " ";
    entrada = prompt("Ingrese un texto o ESC para interrumpir");
}

alert(texto);