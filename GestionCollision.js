/*
    ici je gere collisione entre tete serpent et nourriture 
    mais aussi entre tete serpent et obstacle

    NB: on a la grosseur des nourritures et des obstacles , pour gerer 
    la collision aux 4 coins des nourritures/obstacles 

    la tete de serpent peut apparaitre a gauche , droite , haut , en bas de la nourriture
*/


/*
    Ici on gere tout collision entre tete du serpent et nourriture
    c-a-d qd le serpent mange la nourriture
    Reference sur comment gerer la collision: https://spicyyoghurt.com/tutorials/html5-javascript-game-development/collision-detection-physics
*/
export function colliSerpFood(tabFood,serpent){
    var teteSerpent = serpent.corps[0];
    var xTeteSerp = teteSerpent.positionX;
    var yTeteSerp = teteSerpent.positionY;
    var grosseurCoteSerp = teteSerpent.longueurCote;
    
    var ptsToAdd = 0;

    tabFood.forEach(function(food){
        var xFood = food.posX;
        var yFood = food.posY;
        var grosseurFood = food.grosseur;

        if (xTeteSerp > grosseurFood + xFood || xFood > grosseurCoteSerp + xTeteSerp || yTeteSerp > grosseurFood + yFood || yFood > grosseurCoteSerp + yTeteSerp){
            // Pas de collision ici
        }else{
            ptsToAdd = parseInt(document.getElementById("ptsGagnes").innerHTML) + food.ptsDeVie;
            document.getElementById("ptsGagnes").innerHTML = ptsToAdd + ""
            food.isOnCanvas = false;
            
            serpent.agrandirSerpent();
        }
    });
    return tabFood;
}


export function colliSerpMur(serpent){
    var colli = false;
    if (serpent.corps[0].positionX + serpent.teteSerpent.longueurCote >= 700){
        colli = true;
    }
    if(serpent.corps[0].positionX < 0){ // <= normalement mais comme on commence a 0,0 ca fera pas de sens
        colli = true;
    }
    if(serpent.corps[0].positionY + serpent.teteSerpent.longueurCote >= 700) {
        colli = true;
    }
    if(serpent.corps[0].positionY  < 0 ){
        colli = true;
    }
    return colli;
}

export function colliSerp(serpent){
    var teteSerp = serpent.corps[0];
    var colli = false;
    for(var i=1; i<serpent.corps.length; i++){ 

        // check collision des 4 cotes
        
              // verification collision vers le bas
            if(teteSerp.positionX == serpent.corps[i].positionX && serpent.corps[i].positionY == teteSerp.positionY + teteSerp.longueurCote  && teteSerp.direction == 40){
                colli = true;
            }

            // cote ouest:
            if(serpent.corps[i].positionX == teteSerp.positionX + teteSerp.longueurCote && serpent.corps[i].positionY == teteSerp.positionY && teteSerp.direction == 39 ){
                colli = true;
            }

            // cote est:
            if(serpent.corps[i].positionX + serpent.corps[i].longueurCote == teteSerp.positionX  && serpent.corps[i].positionY == teteSerp.positionY && teteSerp.direction == 37){
                colli = true;
            }

            // cote sud:
            if(teteSerp.positionX == serpent.corps[i].positionX && serpent.corps[i].positionY + serpent.corps[i].longueurCote == teteSerp.positionY && teteSerp.direction == 38){
                colli = true;
            }
        }
    return colli;
}

/*
    Importante lecon:
    Au lieu d'essayer de prendre ts les cas ou ca marche (ya beaucoup);
    mieux vaut chercher tous les cas ou ca marche pas .

    Reference : https://spicyyoghurt.com/tutorials/html5-javascript-game-development/collision-detection-physics
*/
export function colliSerpMovingObs(serpent,tabRoches){
    var corpsSerp = serpent.corps;
    
    tabRoches.forEach(function(mesObs){
        var xRoche = mesObs.posX;
        var yRoche = mesObs.posY;
        var grosseurRoche = mesObs.grosseur;

        corpsSerp.forEach(function(partSerp){
            var xSerp = partSerp.positionX;
            var ySerp = partSerp.positionY;
            var grosseurSerp = partSerp.longueurCote;

            if (xSerp > grosseurRoche + xRoche || xRoche > grosseurSerp + xSerp || ySerp > grosseurRoche + yRoche || yRoche > grosseurSerp + ySerp){
                // Pas de collision ici
            }else{
                // on a collision
                // reduire pts de vie serpent
                var ptsToRemove = parseInt(document.getElementById("ptsDeVie").innerHTML) - mesObs.ptsDeVieEnleves;
                document.getElementById("ptsDeVie").innerHTML = ptsToRemove + ""
                mesObs.isOnCanvas = false;
            }
        });
    });
}