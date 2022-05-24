function generadorRandom(min,max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}


for(let i = 1; i <=100; ++i){
console.log(generadorRandom(0,36));

}

let btnTirar = document.querySelector('.btn__jugar');
btnTirar.addEventListener('click', () => {
    generadorRandom();
    console.log(generadorRandom(0, 36))
})