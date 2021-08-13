/**Chercher un moyen de sauvegarder l'ancienne position de la tete du serpent
 * il faut gerer la direction du serpent pour qu'on puisse l'agrandir en taille
 * 
*/


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

        for(let i = 0; i < this.corps.length; i++) {
            this.corps[i].ancienPosition = [this.corps[i].positionX,this.corps[i].positionY];
            this.corps[i].positionX += this.corps[i].vitesseX;
            this.corps[i].positionY += this.corps[i].vitesseY; 
        }
        
        this.context.clearRect(0,0,this.gameWidth,this.gameHeight);
        this.dessiner(this.context, image);
        
    }

    //Fonction permettant de dessiner le serpent
    dessiner(context,image)
    {
        var longueurCote = this.teteSerpent.longueurCote;
        //var positSerp= this.corps[0].renvoiePosition();
        console.log("la taille du tableau est : " + this.corps.length);
        for(let i = 0; i < this.corps.length; i++) {
            var positSerp= this.corps[i].renvoiePosition();
            console.log(positSerp[0]) ;
            console.log(positSerp[1]) ;
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
        //Creation d'un carre a ajouter
        let allongement = new Forme(this.teteSerpent.formeSerp,25);
        var position = this.corps.length-1;
        var direction = this.corps[position].direction;
        console.log("Je suis la direction" + direction);
        
        switch (direction) {
            //Gauche
            case 37:
                allongement.positionX = this.corps[position].positionX + this.teteSerpent.longueurCote - 2;
                allongement.positionY = this.corps[position].positionY;
                this.corps.push(allongement);
                this.corps[this.corps.length-1].vitesseX = -2;
                this.corps[this.corps.length-1].direction = 37;
                break;
            
            //Droite
            case 39:
                allongement.positionX = this.corps[position].positionX - this.teteSerpent.longueurCote + 2;
                allongement.positionY = this.corps[position].positionY;
                this.corps.push(allongement);
                this.corps[this.corps.length-1].vitesseX = 2;
                this.corps[this.corps.length-1].direction = 39;
                break;

            //Haut
            case 38:
                allongement.positionX = this.corps[position].positionX;
                allongement.positionY = this.corps[position].positionY + this.teteSerpent.longueurCote - 2;
                this.corps.push(allongement);
                this.corps[this.corps.length-1].vitesseY = -2;
                this.corps[this.corps.length-1].direction = 38;
                break;
        
            //Bas
            case 40:
                allongement.positionX = this.corps[position].positionX;
                allongement.positionY = this.corps[position].positionY - this.teteSerpent.longueurCote + 2;
                this.corps.push(allongement);
                this.corps[this.corps.length-1].vitesseY = 2;
                this.corps[this.corps.length-1].direction = 40;
                break;
        }

        //this.corps.pop();
    }

    //Gestion du corps du serpeent sans sa tete
    gestionResteSerpent(direction)
    {
        console.log("Je suis entre dans gestionResteSerpent partie 0");
        switch (direction) {
            case 37:
                for(let i = 1; i < this.corps.length; i++) {
            
                    if (this.corps[i].positionX > this.corps[i-1].ancienPosition[0] ) {
                    } else {
                        this.corps[i].vitesseX = this.corps[i-1].vitesseX;
                        this.corps[i].vitesseY = this.corps[i-1].vitesseX;
                        this.corps[i].direction = this.corps[i-1].direction;
                    }
                }
                break;
                
            case 39:
                for(let i = 1; i < this.corps.length; i++) {
            
                    if (this.corps[i].positionX < this.corps[i-1].ancienPosition[0] ) {
                    } else {
                        this.corps[i].vitesseX = this.corps[i-1].vitesseX;
                        this.corps[i].vitesseY = this.corps[i-1].vitesseX;
                        this.corps[i].direction = this.corps[i-1].direction;
                    }
                }
                break;

            case 38:
                for(let i = 1; i < this.corps.length; i++) {
            
                    if (this.corps[i].positionY > this.corps[i-1].ancienPosition[1] ) {
                        return;
                    } else {
                        this.corps[i].vitesseX = 0;
                        this.corps[i].vitesseY = this.corps[i-1].vitesseX;
                        this.corps[i].direction = this.corps[i-1].direction;
                    }
                }
                break;

            case 40:
                console.log("Je suis entre dans gestionResteSerpent partie 1");
                for(let i = 1; i < this.corps.length; i++) {
            
                    if (this.corps[i].positionX > this.corps[i-1].ancienPosition[0] ) {
                        this.corps[i].vitesseX = -2;
                        this.corps[i].direction = 37;
                    } else {
                        this.corps[i].vitesseX = 0;
                        this.corps[i].vitesseY = this.corps[i-1].vitesseX;
                        this.corps[i].direction = this.corps[i-1].direction;
                    }
                }
                break;
        }

    }

    // /**Fonction gerant le deplacement du serpent*/
    // deplacementADroite()
    // {
    //     this.teteSerpent.positionX += 10;
    //     this.mettreAJourSerpent();
    // }

    // deplacementAGauche()
    // {
    //     this.teteSerpent.positionX -= 10;
    //     this.mettreAJourSerpent();
    // }

    // deplacementEnHaut()
    // {
    //     this.teteSerpent.positionY -= 10;
    //     this.mettreAJourSerpent();
    // }

    // deplacementEnBas()
    // {
    //     this.teteSerpent.positionY += 10;
    //     this.mettreAJourSerpent();
    // }
}
