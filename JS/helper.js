'use strict';
// Consigo los números random
let getRandomNumber = size => {
    // floor() redondea el número para abajo y le quita los decimales
    return Math.floor(Math.random() * size);
}


let getDistance = (e, target) =>{
    let difX= e.offsetX - target.x;
    let difY= e.offsetY - target.y;
    return Math.sqrt((difX * difX) + (difY * difY));
}

let getDistanciaHit = distancia => {
    if(distancia < 5){
        alert("ganaste papa, no jodas mas")
        return "Estas cerca";
    }
    else if(distancia < 20){

        return "uiuiui!!";
    }else
    if(distancia < 40){
        return "Estas un poco cerca";
    }else 
    if(distancia < 80){
        return "Estas lejos bebes"
    }
    else
    if(distancia == 0)
    {
        alert("¡¡Haz ganado!!");
        return "ganaste";
    }
    else{
        return "Lejos";
    }

}
