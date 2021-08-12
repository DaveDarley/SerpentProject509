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

    /**Initialiser le jeu en telechargeant les images */
    gameInitialise()
    {
        var img1 = new Image();
      // attendre pour que l'image soit load 
      img1.addEventListener('load', function(){
      });
      img1.src = "R.png";
      return img1;
    }

    //Fonction mettant a jour le jeu 
    gameloop(image)
    {
        this.serpent.mettreAJourSerpent(image);
        console.log(this.serpent.teteSerpent.positionX);
        if (this.serpent.teteSerpent.positionX < 650 || this.serpent.teteSerpent.positionY < 650){
        window.requestAnimationFrame(()=>this.gameloop(image));}
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

