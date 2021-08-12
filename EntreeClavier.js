
export default class EntreeClavier
{
    constructor(serpent) 
    {
        document.addEventListener("keydown", function(){
            switch(event.keyCode) {
              case 37:
                  console.log("gauche");
                serpent.deplacementAGauche();
            break;
            
            case 39:
                serpent.deplacementADroite();
            break;

            case 38:
                serpent.deplacementEnHaut();
            break;

            case 40:
                serpent.deplacementEnBas();
            break;

            }
        });

    }


}