
export default class EntreeClavier
{
    constructor(serpent) 
    {
        document.addEventListener("keydown", function(){
            alert(event.keyCode);
            switch(event.keyCode) {
                //Gauche
              case 37:

              // essaie Dave 
              var ancienXYTete = [serpent.corps[0].positionX,serpent.corps[0].positionY];
              var ancienDir = serpent.corps[0].direction;
              //fin essai Dave 
                serpent.corps[0].vitesseX = -2;
                serpent.corps[0].vitesseY = 0;
                serpent.corps[0].direction = 37;
                // dave a modifie celui la aussi
                if (serpent.corps.length > 1){
                    
                    serpent.gestionResteSerpent(ancienDir,ancienXYTete);}
            break;
                //Droite
            case 39:
                console.log("droite");

                // essaie Dave 
              // essaie Dave 
                // essaie Dave 
                var ancienXYTete = [serpent.corps[0].positionX,serpent.corps[0].positionY];
                var ancienDir = serpent.corps[0].direction;
                //fin essai Dave 
            //fin essai Dave 
                //fin essai Dave 

                serpent.corps[0].vitesseX = 2;
                serpent.corps[0].vitesseY = 0;
                serpent.corps[0].direction = 39;
                if (serpent.corps.length > 1){
                    serpent.gestionResteSerpent(ancienDir,ancienXYTete);}
            break;
                //Haut
            case 38:
                console.log("Ma direction est : Haut");

                // essaie Dave 
                              // essaie Dave 
                // essaie Dave 
                var ancienXYTete = [serpent.corps[0].positionX,serpent.corps[0].positionY];
                var ancienDir = serpent.corps[0].direction;
                //fin essai Dave 
                            //fin essai Dave 
                //fin essai Dave 

                serpent.corps[0].vitesseX = 0;
                serpent.corps[0].vitesseY= -2;
                serpent.corps[0].direction = 38;
                if (serpent.corps.length > 1){
                    serpent.gestionResteSerpent(ancienDir,ancienXYTete);}
            break;
                //Bas
            case 40:
                console.log("Bas");

                // essaie Dave 
                              // essaie Dave 
                // essaie Dave 
                var ancienXYTete = [serpent.corps[0].positionX,serpent.corps[0].positionY];
                var ancienDir = serpent.corps[0].direction;
                //fin essai Dave 
                            //fin essai Dave 
                //fin essai Dave 

                serpent.corps[0].vitesseX = 0;
                serpent.corps[0].vitesseY = 2;
                serpent.corps[0].direction = 40;
                if (serpent.corps.length > 1){serpent.gestionResteSerpent(ancienDir,ancienXYTete);}
            break;

            case 65:
                console.log("J'ai appele gestion collision");
                serpent.gestionCollision();
                //if (serpent.corps.length > 1){serpent.gestionResteSerpent(40);}
                break
            }
        });

    }


}