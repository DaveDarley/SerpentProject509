
/** Classe gérant les entrées de l'utilisateur */
export default class EntreeUser
{
    /** Création d'un objet EntreeUser avec les objets suivants en paramètre: serpent et la partie nommés respectivement serpent, game */
    constructor(serpent,game) 
    {
        // Le serpent qu'il faut contrôler
        var teteSerp = serpent.teteSerpent;
        // La grosseur du serpent
        var grosseurSerp = teteSerp.longueurCote;
        
        //Écouteur gérant les entrées claviers de l'utilisateur
        document.addEventListener("keydown", function(){
            // Idée:
            // si le jeu est en pause, le joueur ne peut pas faire bouger le serpent
            // Si le serpent va à droite, il ne doit pas pouvoir se retourner sur lui même et aller à gauche,
            //Il doit mettre sa tête en direction nord ou sud avant de pouvoir tourner à gauche
            switch(event.keyCode) {
                //Gauche
                case 37:
                    if(!(teteSerp.positionX < 0 || teteSerp.positionX + grosseurSerp > 700 || teteSerp.positionY < 0 || teteSerp.positionY + grosseurSerp > 700)){
                        if(game.state != "pause" && game.serpent.teteSerpent.direction != 39){ 
                            var ancienTeteX = serpent.corps[0].positionX ;
                            var ancienTeteY = serpent.corps[0].positionY ;
                            var ancienDirect = serpent.corps[0].direction;
                            serpent.corps[0].positionX = serpent.corps[0].positionX  -  serpent.corps[0].longueurCote; //-  2;
                            serpent.corps[0].direction = 37;
                            serpent.mettreAJourSerpent(ancienTeteX,ancienTeteY,ancienDirect);
                        }
                    }
                break;

                //Droite
                case 39:
                    if(!(teteSerp.positionX < 0 || teteSerp.positionX + grosseurSerp > 700 || teteSerp.positionY < 0 || teteSerp.positionY + grosseurSerp > 700)){
                        if(game.state != "pause" && game.serpent.teteSerpent.direction != 37){
                            var ancienTeteX = serpent.corps[0].positionX ;
                            var ancienTeteY = serpent.corps[0].positionY ;
                            var ancienDirect = serpent.corps[0].direction;
                            serpent.corps[0].positionX = serpent.corps[0].positionX  +  serpent.corps[0].longueurCote;// +  2;
                            serpent.corps[0].direction = 39;
                            serpent.mettreAJourSerpent(ancienTeteX,ancienTeteY,ancienDirect);
                        }
                    }
                break;

                //Haut
                case 38:
                    if(!(teteSerp.positionX < 0 || teteSerp.positionX + grosseurSerp > 700 || teteSerp.positionY < 0 || teteSerp.positionY + grosseurSerp > 700)){
                        if(game.state != "pause" && game.serpent.teteSerpent.direction != 40){
                            var ancienTeteX = serpent.corps[0].positionX ;
                            var ancienTeteY = serpent.corps[0].positionY ;
                            var ancienDirect = serpent.corps[0].direction;
                            serpent.corps[0].positionY = serpent.corps[0].positionY  -  serpent.corps[0].longueurCote;// -  2;
                            serpent.corps[0].direction = 38;
                            serpent.mettreAJourSerpent(ancienTeteX,ancienTeteY,ancienDirect);
                        }
                    }
                break;

                //Bas
                case 40:
                    if(!(teteSerp.positionX < 0 || teteSerp.positionX + grosseurSerp > 700 || teteSerp.positionY < 0 || teteSerp.positionY + grosseurSerp > 700)){
                        if(game.state != "pause" && game.serpent.teteSerpent.direction != 38){
                            var ancienTeteX = serpent.corps[0].positionX ;
                            var ancienTeteY = serpent.corps[0].positionY ;
                            var ancienDirect = serpent.corps[0].direction;
                            serpent.corps[0].positionY = serpent.corps[0].positionY  +  serpent.corps[0].longueurCote;// +  2;
                            serpent.corps[0].direction = 40;
                            serpent.mettreAJourSerpent(ancienTeteX,ancienTeteY,ancienDirect);
                        }
                    }
                break;

                // SpaceBar
                case 32: 
                    game.gamePause();
                break;

                // escape key
                case 27: 
                    game.gameQuit();
                break;

            }
        });
        
        /**Écouteur gérant le bouton "Pause" du jeu */
        document.getElementById('pause').addEventListener('click',function(){
            game.gamePause();
        });

        /**Écouteur gérant le bouton "Quitter la partie" du jeu */
        document.getElementById('quit').addEventListener('click',function(){
            game.gameQuit();
        });

        /**Écouteur gérant le bouton "Recommencer la partie" du jeu */
        document.getElementById('restart').addEventListener('click',function(){
            game.gameRestart();
        });
    }
    
}