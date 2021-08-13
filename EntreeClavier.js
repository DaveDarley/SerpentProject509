
export default class EntreeClavier
{
    constructor(serpent) 
    {
        document.addEventListener("keydown", function(){
            alert("event.keyCode");
            switch(event.keyCode) {
              case 37:
                  console.log("gauche");
                //serpent.deplacementAGauche();
            break;
            
            case 39:
                //serpent.deplacementADroite();
                //gestionCollision();
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