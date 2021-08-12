import Forme from "./Forme.js";

export default class Serpent
{
    constructor(gameWidth, gameHeight, formeSerp,context)
    {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.context = context;
        this.teteSerpent = new Forme(formeSerp,25);
        this.nom = "Serpentin";
        this.pointDeVie = 100;
        this.corps = [this.teteSerpent];
        this.pointGagne = 0;
    }

    //Fonction renvoyant la position de la tete du serpent 
    positionTete()
    {
        return this.corps[0].renvoiePosition();
    }

    /**Foonction permettant de mettre a jour le serpent sur le canvas(effacer et redessiner) */
    mettreAJourSerpent(image)
    {
        this.corps[0].positionX += 2;
        this.corps[0].positionY += 2;
        this.context.clearRect(0,0,this.gameWidth,this.gameHeight);
        this.dessiner(this.context, image);
    }

    //Fonction permettant de dessiner le serpent
    dessiner(context,image)
    {
        var longueurCote = this.teteSerpent.longueurCote;
        var positSerp= this.corps[0].renvoiePosition();
        context.fillRect(5, positSerp[1], longueurCote, longueurCote);
        context.drawImage(image, positSerp[0], 0, longueurCote,longueurCote);
        for(let i = 0; i < this.corps.length; i++) {
            console.log("gfhf");
            //var positSerp= this.corps[0].renvoiePosition();
            // (image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
            context.drawImage(image, positSerp[0], positSerp[1], longueurCote,longueurCote);
        }

    }

    //Fonction renvoyant les points gagnes 
    pointGagne()
    {
        return this.pointGagne;
    }

    /**Fonction gerant les collisions */
    gestionCollision()
    {
        //this.corps.push(new Forme());
        //this.corps.pop();
    }

    /**Fonction gerant le deplacement du serpent*/
    deplacementADroite()
    {
        this.teteSerpent.positionX += 10;
        this.mettreAJourSerpent();
    }

    deplacementAGauche()
    {
        this.teteSerpent.positionX -= 10;
        this.mettreAJourSerpent();
    }

    deplacementEnHaut()
    {
        this.teteSerpent.positionY -= 10;
        this.mettreAJourSerpent();
    }

    deplacementEnBas()
    {
        this.teteSerpent.positionY += 10;
        this.mettreAJourSerpent();
    }
}
