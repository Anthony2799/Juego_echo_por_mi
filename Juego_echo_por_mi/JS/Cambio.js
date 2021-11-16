let search_mine;
let search_for_treasure;
let cantClick=0;
window.onload=function(){
    window.addEventListener('click', function(){
        if(cantClick * 100 == 10000)
        {
            this.alert("Ha echo 100 click's");
        }
        cantClick++;

    });

    
    console.log("inicio");
    search_for_treasure=document.getElementById("searchForTreasure");
    search_mine =document.getElementById("searchMine");
    search_for_treasure.style.display="none";
    search_mine.style.display="none";
}

function aparecerSearch()
{
    search_for_treasure.style.display="block";
    search_mine.style.display="none";
    star_search_treasure();
}

function aparecerMine()
{
    let search_for_treasure =document.getElementById("searchForTreasure");
    let search_mine =document.getElementById("searchMine");
    search_for_treasure.style.display="none";
    search_mine.style.display="block";
}

