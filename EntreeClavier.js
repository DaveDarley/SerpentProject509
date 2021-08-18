
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
                for (let i = 1; i < serpent.corps.length; i++) {
                    serpent.corps[i].ancienPosition = [serpent.corps[i-1].positionX,serpent.corps[i-1].positionY];
                    serpent.corps[i].ancienDirection = serpent.corps[i-1].direction;
                }
                
                //fin essai Dave 

                serpent.corps[0].vitesseX = -2;
                serpent.corps[0].vitesseY = 0;
                serpent.corps[0].direction = 37;
                // dave a modifie celui la aussi
                if (serpent.corps.length > 1){
                    serpent.changerDirect = true;}
            break;
                //Droite
            case 39:
                //console.log("droite");

                // essaie Dave 
                   //var ancienXYTete = [serpent.corps[0].positionX,serpent.corps[0].positionY];
                // var ancienDir = serpent.corps[0].direction;
                //fin essai Dave 

            //fin essai Dave 
                //fin essai Dave 
                // serpent.dernierPositionTeteSerpent = ancienXYTete;
                // serpent.ancienDirection = serpent.corps[0].direction;
                for (let i = 1; i < serpent.corps.length; i++) {
                    serpent.corps[i].ancienPosition = [serpent.corps[i-1].positionX,serpent.corps[i-1].positionY];
                    serpent.corps[i].ancienDirection = serpent.corps[i-1].direction;
                }


                serpent.corps[0].vitesseX = 2;
                serpent.corps[0].vitesseY = 0;
                serpent.corps[0].direction = 39;
                // if (serpent.corps.length > 1){
                //     serpent.gestionResteSerpent(ancienDir,ancienXYTete);}
                if (serpent.corps.length > 1){
                    serpent.changerDirect = true;}
            break;
                //Haut
            case 38:
                //console.log("Ma direction est : Haut");

                // essaie Dave 
                              // essaie Dave 
                // essaie Dave 
                //var ancienXYTete = [serpent.corps[0].positionX,serpent.corps[0].positionY];
                //var ancienDir = serpent.corps[0].direction;
                //fin essai Dave 
                            //fin essai Dave 
                //fin essai Dave 
                // serpent.dernierPositionTeteSerpent = ancienXYTete;
                // serpent.ancienDirection = serpent.corps[0].direction;
                for (let i = 1; i < serpent.corps.length; i++) {
                    serpent.corps[i].ancienPosition = [serpent.corps[i-1].positionX,serpent.corps[i-1].positionY];
                    serpent.corps[i].ancienDirection = serpent.corps[i-1].direction;
                }

                serpent.corps[0].vitesseX = 0;
                serpent.corps[0].vitesseY= -2;
                serpent.corps[0].direction = 38;
                if (serpent.corps.length > 1){
                    serpent.changerDirect = true;}
            break;
                //Bas
            case 40:
                //console.log("Bas");

                // essaie Dave 
                              // essaie Dave 
                // essaie Dave 
                //var ancienXYTete = [serpent.corps[0].positionX,serpent.corps[0].positionY];
                //var ancienDir = serpent.corps[0].direction;
                //fin essai Dave 
                            //fin essai Dave 
                //fin essai Dave 
                // serpent.dernierPositionTeteSerpent = ancienXYTete;
                // serpent.ancienDirection = serpent.corps[0].direction;
                for (let i = 1; i < serpent.corps.length; i++) {
                    serpent.corps[i].ancienPosition = [serpent.corps[i-1].positionX,serpent.corps[i-1].positionY];
                    serpent.corps[i].ancienDirection = serpent.corps[i-1].direction;
                }
                serpent.corps[0].vitesseX = 0;
                serpent.corps[0].vitesseY = 2;
                serpent.corps[0].direction = 40;
                if (serpent.corps.length > 1){
                    serpent.changerDirect = true;}
            break;

            case 65:
                serpent.gestionCollision();
                //if (serpent.corps.length > 1){serpent.gestionResteSerpent(40);}
                break
            }
        });

    }


}