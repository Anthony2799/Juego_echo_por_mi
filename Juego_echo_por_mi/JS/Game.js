// Juego 1 - Buscar el tesoro
// asigno tamanio
const width = 400;
const heigh = 400;

// creo num random
function star_search_treasure()
{
    let target = {
        x : getRandomNumber(width),
        y : getRandomNumber(heigh)
    };

    // traigo los div
    let $map = document.getElementById('map');
    let $distancia =  document.getElementById('distance');
    let clicksU = 0;

    // creo evento para saber si estoy cerca del elemento
    $map.addEventListener('click', function (e) {
        clicksU++;
        let distancia = getDistance(e, target);
        
        let textoDeDistancia = getDistanciaHit(distancia);
        $distancia.innerHTML = `<h1>${textoDeDistancia}</h1>`;
        if(distancia <5){
            alert(`Ganaste usando ${clicksU} click's`)
        }
    })
}
//Juego 2 - Busca minas

let cant_bomba = document.getElementById