

export default class EntreeUser
{
    constructor(serpent,game) 
    {
        //Listener gerant les entrees claviers de l'utilisateur
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
            break;

            case 32:
                game.gamePause();
            break;

            case 27:
                game.gameQuit();
            break;

            }
        });

        //Ecouteur gerant l'etat Pause du jeu
        document.getElementById('pause').addEventListener('click',function(){
            game.gamePause();
        });

        //Ecouteur gerant la fonction "Quitter" de la partie
        document.getElementById('quit').addEventListener('click',function(){
            game.gameQuit();
        });

        //Ecouteur gerant la fonction "Restart" de la partie
        document.getElementById('restart').addEventListener('click',function(){
            game.gameRestart();
        });
    }
}