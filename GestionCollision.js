/*
    Gestion des collisions entre tête serpent et nourriture 
    mais aussi entre tête serpent et obstacle

    NB: on a la grosseur des nourritures et des obstacles, pour gérer 
    la collision aux 4 coins des nourritures/obstacles 

    la tête de serpent peut apparaitre à gauche, droite, haut, en bas de la nourriture
*/

/**
Fonction gérant toutes collisions entre tête du serpent et nourriture (quand le serpent mange la nourriture)
Référence sur les manières de gérer une collision:
https://spicyyoghurt.com/tutorials/html5-javascript-game-development/collision-detection-physics
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
            document.getElementById("ptsGagnes").innerHTML = ptsToAdd + "";
            food.isOnCanvas = false;
            serpent.agrandirSerpent();
        }
    });
    return tabFood;
}

/** Fonction gérant les collisions entre le serpent et le cadre du canvas */
export function colliSerpMur(serpent){
    var colli = false;
    if (serpent.corps[0].positionX + serpent.teteSerpent.longueurCote >= 700){
        colli = true;
    }
    if(serpent.corps[0].positionX < 0){ // <= normalement mais comme on commence à 0,0, ça ne fera pas de sens
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

/** Fonction vérifiant si le serpent est en collision avec soi-même */
export function colliSerp(serpent){
    var teteSerp = serpent.corps[0];
    var colli = false;
    for(var i=1; i<serpent.corps.length; i++){ 

        // vérification collision des 4 côtés
        
            // vérification collision vers le bas
            if(teteSerp.positionX == serpent.corps[i].positionX && serpent.corps[i].positionY == teteSerp.positionY + teteSerp.longueurCote  && teteSerp.direction == 40){
                colli = true;
            }

            // côté ouest:
            if(serpent.corps[i].positionX == teteSerp.positionX + teteSerp.longueurCote && serpent.corps[i].positionY == teteSerp.positionY && teteSerp.direction == 39 ){
                colli = true;
            }

            // côté est:
            if(serpent.corps[i].positionX + serpent.corps[i].longueurCote == teteSerp.positionX  && serpent.corps[i].positionY == teteSerp.positionY && teteSerp.direction == 37){
                colli = true;
            }

            // côté sud:
            if(teteSerp.positionX == serpent.corps[i].positionX && serpent.corps[i].positionY + serpent.corps[i].longueurCote == teteSerp.positionY && teteSerp.direction == 38){
                colli = true;
            }
        }
    return colli;
}

/*
Importante leçon:
    Au lieu d'essayer de prendre tous les cas ou ça marche (il y en a beaucoup), mieux vaut chercher 
    tous les cas où ça marche pas .

    Référence:
    https://spicyyoghurt.com/tutorials/html5-javascript-game-development/collision-detection-physics
*/
export function colliSerpMovingObs(serpent,tabRoches){
    var corpsSerp = serpent.corps;
    
    tabRoches.forEach(function(mesObs){
        var xRoche = mesObs.posX;
        var yRoche = mesObs.posY;
        var grosseurRoche = mesObs.grosseur;

        var ptsToRemove = mesObs.ptsDeVieEnleves;

        corpsSerp.forEach(function(partSerp){
            var xSerp = partSerp.positionX;
            var ySerp = partSerp.positionY;
            var grosseurSerp = partSerp.longueurCote;

            if (xSerp > grosseurRoche + xRoche || xRoche > grosseurSerp + xSerp || ySerp > grosseurRoche + yRoche || yRoche > grosseurSerp + ySerp){
                // Pas de collision ici
            }else{
                // on a collision
                // reduire pts de vie serpent
                var ptsDeVieSerp = parseInt(document.getElementById("ptsDeVie").innerHTML) - ptsToRemove ;
                document.getElementById("ptsDeVie").innerHTML = ptsDeVieSerp + "";
                serpent.pointDeVie  -=  ptsToRemove;
                mesObs.isOnCanvas = false;
            }
        });
    });
}

/** Gestion des collisions entre serpent et obstacles sur le canvas ne prennant pas en compte les 
 * collisions avec le cadre */
export function colliSerpObs(serpent,tabRoches){
    var teteSerp = serpent.corps[0];
    var xSerp = teteSerp.positionX;
    var ySerp = teteSerp.positionY;
    var grosseurSerp = teteSerp.longueurCote;

    tabRoches.forEach(function(mesObs){
        var xRoche = mesObs.posX;
        var yRoche = mesObs.posY;
        var grosseurRoche = mesObs.grosseur;

        var ptsToRemove = mesObs.ptsDeVieEnleves;

        if (xSerp > grosseurRoche + xRoche || xRoche > grosseurSerp + xSerp || ySerp > grosseurRoche + yRoche || yRoche > grosseurSerp + ySerp){
            // Pas de collision ici
            mesObs.isOnCanvas = true;
        }else{
            // on a une collision
            // réduire les points de vie du serpent
            if(mesObs.isOnCanvas){
                var ptsDeVieSerp = parseInt(document.getElementById("ptsDeVie").innerHTML) - ptsToRemove;
                document.getElementById("ptsDeVie").innerHTML = ptsDeVieSerp + ""
                serpent.pointDeVie -= ptsToRemove;
            }
            mesObs.isOnCanvas = false;
        }
        
    });
}

