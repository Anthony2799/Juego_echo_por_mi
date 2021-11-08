
const width = 400;
const heigh = 400;


let target = {
    x : getRandomNumber(width),
    y : getRandomNumber(heigh)
};

let $map = document.getElementById('map');
let $distancia =  document.getElementById('distance');
let clicksU = 0;

$map.addEventListener('click', function (e) {
    clicksU++;
    let distancia = getDistance(e, target);
    
    let textoDeDistancia = getDistanciaHit(distancia);
    $distancia.innerHTML = `<h1>${textoDeDistancia}</h1>`;
    if(distancia <5){
        alert(`Ganaste usando ${clicksU} click's`)
    }
})


