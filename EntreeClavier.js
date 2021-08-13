
export default class EntreeClavier
{
    constructor(serpent) 
    {
        document.addEventListener("keydown", function(){
            alert(event.keyCode);
            switch(event.keyCode) {
                //Gauche
              case 37:
                serpent.corps[0].vitesseX = -2;
                serpent.corps[0].vitesseY = 0;
                serpent.corps[0].direction = 37;
                if (serpent.corps.length > 1){serpent.gestionResteSerpent(37);}
            break;
                //Droite
            case 39:
                console.log("droite");
                serpent.corps[0].vitesseX = 2;
                serpent.corps[0].vitesseY = 0;
                serpent.corps[0].direction = 39;
                if (serpent.corps.length > 1){serpent.gestionResteSerpent(39);}
            break;
                //Haut
            case 38:
                console.log("Haut");
                serpent.corps[0].vitesseX = 0;
                serpent.corps[0].vitesseY= -2;
                serpent.corps[0].direction = 38;
                if (serpent.corps.length > 1){serpent.gestionResteSerpent(38);}
            break;
                //Bas
            case 40:
                console.log("Bas");
                serpent.corps[0].vitesseX = 0;
                serpent.corps[0].vitesseY = 2;
                serpent.corps[0].direction = 40;
                if (serpent.corps.length > 1){serpent.gestionResteSerpent(40);}
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