import EntreeClavier from "./EntreeClavier.js";

export default class Game
{
    constructor(canvas, context, serpent, gameWidth,gameHeight/*, nourriture, obstacle*/)
    {
        this.canvas = canvas;
        this.context = context;
        this.serpent = serpent;
        this.gameWidth = gameWidth;
        this.gameHeight =gameHeight;
    }


    //Fonction mettant a jour le jeu 
    gameloop()
    {
        this.serpent.mettreAJourSerpent();
        console.log(this.serpent.teteSerpent.positionX);
        //window.requestAnimationFrame(()=>this.gameloop());
    }

    /**Fonction permettant de demarrer le jeu */
    gameStart()
    {
        this.serpent.teteSerpent.changerPosition(200,400);
        this.serpent.dessiner(this.context);

        new EntreeClavier(this.serpent);
        //context.clearRect(0,0,this.gameWidth,this.gameHeight);

    }

    /**Fonction permettant de mettre  */
    gamePause()
    {

    }

    /**Fonction permettant de redemarrer le jeu */
    gameRestart()
    {

    }

    /**Fonction permettant de mettre fin au jeu */
    gameStop()
    {

    }

}

