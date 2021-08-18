
export default class EntreeClavier
{
    constructor(serpent,image) 
    {
        document.addEventListener("keydown", function(){
            //alert(event.keyCode);
            switch(event.keyCode) {
                //Gauche
              case 37:
                var ancienTeteX = serpent.corps[0].positionX ;
                var ancienTeteY = serpent.corps[0].positionY ;
                var ancienDirect = serpent.corps[0].direction;
                serpent.corps[0].positionX = serpent.corps[0].positionX  -  serpent.corps[0].longueurCote -  2;
                serpent.corps[0].direction = 37;
                serpent.mettreAJourSerpent(ancienTeteX,ancienTeteY,ancienDirect)
            break;
                //Droite
            case 39:
                var ancienTeteX = serpent.corps[0].positionX ;
                var ancienTeteY = serpent.corps[0].positionY ;
                var ancienDirect = serpent.corps[0].direction;
                serpent.corps[0].positionX = serpent.corps[0].positionX  +  serpent.corps[0].longueurCote +  2;
                serpent.corps[0].direction = 39;
                serpent.mettreAJourSerpent(ancienTeteX,ancienTeteY,ancienDirect)
            break;
                //Haut
            case 38:
                var ancienTeteX = serpent.corps[0].positionX ;
                var ancienTeteY = serpent.corps[0].positionY ;
                var ancienDirect = serpent.corps[0].direction;
                serpent.corps[0].positionY = serpent.corps[0].positionY  -  serpent.corps[0].longueurCote -  2;
                serpent.corps[0].direction = 38;
                serpent.mettreAJourSerpent(ancienTeteX,ancienTeteY,ancienDirect)
            break;
                //Bas
            case 40:
                var ancienTeteX = serpent.corps[0].positionX ;
                var ancienTeteY = serpent.corps[0].positionY ;
                var ancienDirect = serpent.corps[0].direction;
                serpent.corps[0].positionY = serpent.corps[0].positionY  +  serpent.corps[0].longueurCote +  2;
                serpent.corps[0].direction = 40;
                serpent.mettreAJourSerpent(ancienTeteX,ancienTeteY,ancienDirect)
            break;

            case 65:
                serpent.agrandirSerpent()
                break
            }
        });

    }


}