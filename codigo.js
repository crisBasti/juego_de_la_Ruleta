// let jugado = 32

// NUMEROS Y COLUMNAS Y COLORES DEL PAÑO DE LA RULETA
// const panioDeLaRuleta = [0, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, "col-1", "col-2", "col-3", "negro", "rojo"];

// for (i = 0; i < panioDeLaRuleta.length; i++) {
//     const jugado = panioDeLaRuleta[i];
    
// }

// function buscar(item) {
//     return item > 20
// }

// console.log(panioDeLaRuleta.find(buscar));

// FUNCIONES >>>>>
function generadorRandom(min,max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function resta(num1,num2) {
    return num1 - num2;
}

function suma(num1, num2){
    return num1 + num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function jugar() {
    if(bolilla.textContent === numeroElegido) {
        alert('HAY UN GANADOR');
        let premioPleno = multiplicar(dineroApostado, 36);
        suma(restoDelCredito, premioPleno);
        credito.innerHTML = `Credito : ${premioPleno}`;

    } else {
        restoDelCredito = resta(dinero, dineroApostado);
        credito.innerHTML = `Credito : ${restoDelCredito}`;
        alert('NO HAY COINCIDENCIAS . JUEGA DE NUEVO');
        numeroElegido = null;
        dineroApostado = null;
    }
}



// for(let i = 1; i <=100; ++i){
//     console.log(generadorRandom(0,36));
// }

let nombre = prompt('Cual es tu nombre?');
let dinero = prompt('Cuanto credito quieres cargar?');
let restoDelCredito;


const usuario = document.querySelector('.usuario');
usuario.innerHTML = `${nombre}`;


const credito = document.querySelector('.credito');
credito.innerHTML = ` Credito : ${dinero} `;
console.log(credito.value);

let bolilla = document.querySelector('.bolilla');

const plenos = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36'];

const valorN1 = document.querySelector('.valor__1');
valorN1.addEventListener('click',()=>console.log('HICISTE CLICK'));


valorN1.addEventListener("dragstart",()=>console.log('1'));
valorN1.addEventListener('drag',()=>console.log(2));
valorN1.addEventListener('dragend',()=>console.log(3));

let btn__elegir = document.querySelector('.btn__elegir');
let numeroElegido;
btn__elegir.addEventListener('click', ()=> {
    numeroElegido = prompt('A que numero de la ruleta del "0 al 36" quieres apostar??');
})

let btn__apuesta = document.querySelector('.btn__apuesta');
let dineroApostado;
btn__apuesta.addEventListener('click', ()=>{
    dineroApostado = prompt('cuanto dinero queres apostar?');
})


let btnTirar = document.querySelector('.btn__jugar');

btnTirar.addEventListener('click', () => {

    bolilla.innerHTML = generadorRandom(0, 36);
    console.log(bolilla.textContent);

    jugar();

})



const panioRuleta = document.querySelector('.num__00');

panioRuleta.addEventListener('dragenter', ()=>console.log(1));
panioRuleta.addEventListener('dragover', (e)=>{
    e.preventDefault();
    console.log(2)
});
panioRuleta.addEventListener('drop', ()=>console.log(1));
panioRuleta.addEventListener('dragleave', ()=>console.log(1));


// ME MUESTRA LAS OPCIONES DEL MENU >>>>
function recorrerArray(array) {
    for(let i=0;i<array.length; i++) {
        console.log(array[i])
    }
} 
// recorrerArray(menu)

// ME MUESTRA LAS OPCIONES DEL MENU <<<<<



console.log(bolilla.textContent);


