/*
    ici je gere collisione entre tete serpent et nourriture 
    mais aussi entre tete serpent et obstacle

    NB: on a la grosseur des nourritures et des obstacles , pour gerer 
    la collision aux 4 coins des nourritures/obstacles 

    la tete de serpent peut apparaitre a gauche , droite , haut , en bas de la nourriture
*/



// Cas qui n'a pas encore gere ici;
// qd la tete de la tete du serpent est largement superieur a la nourriture
// Voir demain avec barreau et bitho


// If trop grand , faut les reduire
export function colliSerpFood(tabFood,serpent){
    var teteSerpent = serpent.corps[0];
    var xTeteSerp = teteSerpent.positionX;
    var yteteSerp = teteSerpent.positionY;
    var grosseurCoteSerp = teteSerpent.longueurCote
    var ptsToAdd = parseInt(document.getElementById("ptsDeVie").innerHTML);
    

    tabFood.forEach(function(food){

        // sort de la gauche vers la droite 
       if(teteSerpent.direction == 39 && xTeteSerp + grosseurCoteSerp >= food.posX && ( (yteteSerp >= food.posY && yteteSerp <= food.posY + food.grosseur) || (yteteSerp + grosseurCoteSerp >= food.posY && yteteSerp + grosseurCoteSerp <= food.posY + food.grosseur) )){
          ptsToAdd += food.ptsDeVie;
          food.isOnCanvas = false;
          serpent.agrandirSerpent();
        }

        // sort de la droite vers la gauce
        if(teteSerpent.direction == 37 && xTeteSerp  <= food.posX + food.grosseur && ( (yteteSerp >= food.posY && yteteSerp <= food.posY + food.grosseur) || (yteteSerp + grosseurCoteSerp >= food.posY && yteteSerp + grosseurCoteSerp <= food.posY + food.grosseur) )){
            ptsToAdd += food.ptsDeVie;
            food.isOnCanvas = false;
            serpent.agrandirSerpent();
        }

        // sort du haut vers le bas
        if(teteSerpent.direction == 40 && yteteSerp + grosseurCoteSerp >= food.posY && ((xTeteSerp >= food.posX && xTeteSerp <= food.posX + food.grosseur) || (xTeteSerp + grosseurCoteSerp >= food.posX && xTeteSerp + grosseurCoteSerp <= food.posX + food.grosseur)) ){

            console.log(teteSerpent.direction);
            console.log(yteteSerp + grosseurCoteSerp );
            console.log(food.posY);
            ptsToAdd += food.ptsDeVie;
            food.isOnCanvas = false;
            serpent.agrandirSerpent(); 
        }

        // sort du bas vers le haut
        if(teteSerpent.direction == 38 && yteteSerp <= food.posY + food.grosseur && ( (xTeteSerp >= food.posX && xTeteSerp <= food.posX + food.grosseur) || (xTeteSerp + grosseurCoteSerp >= food.posX && xTeteSerp + grosseurCoteSerp <= food.posX + food.grosseur) )){
            ptsToAdd += food.ptsDeVie;
            food.isOnCanvas = false;
            serpent.agrandirSerpent();
        }
    });
    document.getElementById("ptsDeVie").innerHTML = ptsToAdd;
    return tabFood;
}


// Un peu toff
// Gerer non seulement avec tete serpent mais aussi avec corps serpent
// on a pas encore gerer les collisions entre obstacles , et serpent (on doit le faire dans cette fonction )
export function colliSerpObs(tabFood,serpent){
    var teteSerpent = serpent.corps[0];
    var xTeteSerp = teteSerpent.positionX;
    var yteteSerp = teteSerpent.positionY;
    var grosseurCoteSerp = teteSerpent.longueurCote

    

    tabFood.forEach(function(food){

        // cote gauche
        if(xTeteSerp + grosseurCoteSerp == food.posX && yteteSerp >= food.posY && yteteSerp <= food.posY + food.grosseur){
          
          foodOrObs.isOnCanvas = false;
        }

        // cote droit
        if(xTeteSerp  == food.posX + food.grosseur && yteteSerp >= food.posY && yteteSerp <= food.posY + food.grosseur){
            foodOrObs.isOnCanvas = false;
        }

        // cote haut
        if(food.posY == yteteSerp + grosseurCoteSerp && xTeteSerp >= food.posX  && xTeteSerp <= food.posX + food.grosseur){
            foodOrObs.isOnCanvas = false;
        }

        // cote bas
        if(yteteSerp == food.posY + food.grosseur && xTeteSerp >= food.posX  && xTeteSerp <= food.posX + food.grosseur){
            foodOrObs.isOnCanvas = false;
        }


    });
    return tabFood;
}