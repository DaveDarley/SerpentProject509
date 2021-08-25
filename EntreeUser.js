

export default class EntreeUser
{
    constructor(serpent,game) 
    {
        var teteSerp = serpent.teteSerpent;
        var grosseurSerp = teteSerp.longueurCote;
        

            //Listener gerant les entrees claviers de l'utilisateur
            document.addEventListener("keydown", function(){
                
                switch(event.keyCode) {
                    //Gauche
                case 37:
                    // Idee: si le jeu est en pause , on doit pas pouvoir faire bouger le serpent , mais aussi 
                    // si le serpent va a droite il doit pas pouvoir retourner sur lui meme et aller a gauche ,
                    // il doit mettre sa tete en direction nord ou sud avant de pouvoir tourner a gauche
                    
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
                
                case 65:
                    serpent.agrandirSerpent()
                break;

                case 32: // SpaceBar
                    game.gamePause();
                break;

                case 27: // escape key
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