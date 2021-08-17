/*
    ici je gere collisione entre tete serpent et nourriture 
    mais aussi entre tete serpent et obstacle

    NB: on a la grosseur des nourritures et des obstacles , pour gerer 
    la collision aux 4 coins des nourritures/obstacles
*/


// cette fonction retourne la nourriture (s'il y en a ) qui rentrera
// en collision avec la tete du serpent lors de la prochaine animation

export function colliSerpFood(tabFood,posTeteSerpX,posTeteSerpY){
    var food;
    tabFood.forEach(function(maNourriture){
        if(maNourriture.getX() == posTeteSerpX && maNourriture.getY() == posTeteSerpY){
        food = maNourriture; // la nourriture qui rentrera en collision avec la tete du serpent
        }
    });
    return food;
}

// Fait pareil que la fonction d'avant mais cette fois avec les obstacles
export function colliSerpObs(tabObs,posTeteSerpX,posTeteSerpY){
    var obs;
    tabObs.forEach(function(monObstacle){
        if(monObstacle.getX() == posTeteSerpX && monObstacle.getY() == posTeteSerpY){
        obs = monObstacle; // l'obstacle qui rentrera en collision avec la tete du serpent
        }
    });
    return obs;
}