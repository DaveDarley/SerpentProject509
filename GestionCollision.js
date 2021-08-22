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
       /*if(teteSerpent.direction == 39 && xTeteSerp + grosseurCoteSerp >= food.posX && ( (yteteSerp >= food.posY && yteteSerp <= food.posY + food.grosseur) || (yteteSerp + grosseurCoteSerp >= food.posY && yteteSerp + grosseurCoteSerp <= food.posY + food.grosseur) )){
          ptsToAdd += food.ptsDeVie;
          food.isOnCanvas = false;
          serpent.agrandirSerpent();
        }

        // sort de la droite vers la gauce
        if(teteSerpent.direction == 37 && xTeteSerp  <= food.posX + food.grosseur && ( (yteteSerp >= food.posY && yteteSerp <= food.posY + food.grosseur) || (yteteSerp + grosseurCoteSerp >= food.posY && yteteSerp + grosseurCoteSerp <= food.posY + food.grosseur) )){
            ptsToAdd += food.ptsDeVie;
            food.isOnCanvas = false;
            serpent.agrandirSerpent();
        }*/

        // sort du haut vers le bas
        if(teteSerpent.direction == 40 && yteteSerp + grosseurCoteSerp >= food.posY && ((xTeteSerp >= food.posX && xTeteSerp <= food.posX + food.grosseur) || (xTeteSerp + grosseurCoteSerp >= food.posX && xTeteSerp + grosseurCoteSerp <= food.posX + food.grosseur) || (food.posX >= xTeteSerp  && food.posX + food.grosseur <= xTeteSerp + grosseurCoteSerp)  ) ){

            console.log(teteSerpent.direction);
            console.log(yteteSerp + grosseurCoteSerp );
            console.log(food.posY);
            ptsToAdd += food.ptsDeVie;
            food.isOnCanvas = false;
            serpent.agrandirSerpent(); 
        }

       /* // sort du bas vers le haut
        if(teteSerpent.direction == 38 && yteteSerp <= food.posY + food.grosseur && ( (xTeteSerp >= food.posX && xTeteSerp <= food.posX + food.grosseur) || (xTeteSerp + grosseurCoteSerp >= food.posX && xTeteSerp + grosseurCoteSerp <= food.posX + food.grosseur) )){
            ptsToAdd += food.ptsDeVie;
            food.isOnCanvas = false;
            serpent.agrandirSerpent();
        }*/
    });
    document.getElementById("ptsDeVie").innerHTML = ptsToAdd;
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

export function colliObtsEnMouvement(serpent, obstacles)
{
    for (let i = 0; i < obstacles.length; i++) {

        switch (serpent.teteSerpent.direction) {
            //Gauche
            case 37:
                
                break;
            
            //Droite
            case 39:
                break;

                //Haut
            case 38:
                if( (((serpent.teteSerpent.positionX < obstacles[i].posX + obstacles[i].grosseur) && (serpent.teteSerpent.positionX > obstacles[i].posX)) ||
                    ((obstacles[i].posX < serpent.teteSerpent.positionX + obstacles[i].grosseur)&& (obstacles[i].posX > serpent.teteSerpent.positionX)))&&
                    (serpent.teteSerpent.positionY <= (obstacles[i].posY + obstacles[i].grosseur))
                )
                {
                    obstacles[i].isOnCanvas = false;
                }
                break;

            //Bas
            case 40:

                break;
            default:
                break;
        }
    }
    return obstacles;
}
