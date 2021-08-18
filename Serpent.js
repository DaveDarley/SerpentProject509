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
        this.dernierPositionTeteSerpent= [];
        this.changerDirect = false;
    }

    //Fonction renvoyant la position de la tete du serpent 
    positionTete()
    {
        return this.corps[0].renvoiePosition();
    }

    /**Fonction permettant de mettre a jour le serpent sur le canvas(effacer et redessiner) */
    mettreAJourSerpent(image)
    {
       for(let i = 0; i < this.corps.length; i++) {
            // this.corps[i].ancienPosition = [this.corps[i].positionX,this.corps[i].positionY];
            // var ancienTeteX = this.corps[0].positionX;
            // var ancienTeteY = this.corps[0].positionY;
            this.corps[i].positionX += this.corps[i].vitesseX;
            this.corps[i].positionY += this.corps[i].vitesseY;

            if (this.changerDirect == true && i > 0)
            {
                this.gestionResteSerpent(this.corps[i-1].ancienDirection);
            }
       }

       if (this.corps[i].positionX > 700)
       {
            this.corps[i].positionX = 0;
       }

       if(this.corps[i].positionX + 25 < 0 )
       {
        this.corps[i].positionX = 700;
       }

       if (this.teteSerpent.positionY > 700) {
            this.teteSerpent.positionY = 0;
       }
       
       if(this.teteSerpent.positionY + 25 < 0 )
       {
        this.teteSerpent.positionY = 700;
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
        console.log("Je devrais suivre la direction" + direction);
        
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

    /**Gestion serpent Dave */
    //  gestionResteSerpent(direction,ancienX,ancienY)
    // {
    //    var ancienPosX = 0;
    //    var ancienPosY = 0;

    //    var x= 0; var y = 0;

    //   for(var i = 1; i<this.corps.length; i++){
    //      if(i == 1){
    //        x = this.corps[i].positionX;
    //        y = this.corps[i].positionY;

    //        this.corps[i].positionX =  ancienX;
    //        this.corps[i].positionY = ancienY;
    //        this.corps[i].direction = direction;
    //      }else{
    //          var newX = 0;
    //          var newY = 0;

    //          switch(this.corps[i-1].direction){
    //             case 37:
    //                 newX = this.corps[i-1].positionX + this.corps[i-1].longueurCote + 2;
    //                 break;
    //             case 39:
    //                 newX = this.corps[i-1].positionX - 2;
    //                 break;
    //             case 38:
    //                 newY = this.corps[i-1].positionY + this.corps[i-1].longueurCote + 2;
    //                 break;
    //             case 40:
    //                 newY = this.corps[i-1].positionY - 2;
    //                 break;
    //         }

    //       ancienPosX = this.corps[i].positionX + newX;
    //       ancienPosY = this.corps[i].positionY + newY;


    //       this.corps[i].positionX = x;
    //       this.corps[i].positionY = y;
    //       this.corps[i].direction = this.corps[i-1].direction;

    //         x = ancienPosX;
    //         y = ancienPosY;
    //      }
    //   } 

    // /*  if(i < this.corps.length){
    //     var newX = this.corps[i].positionX;
    //     var newY = this.corps[i].positionY;
  
    //     this.corps[i].positionX = ancienX;
    //     this.corps[i].positionY = ancienY;
    //      var newIndex = i++;
    //     this.gestionResteSerpent(direction,newX,newY,newIndex);*/
    //   }






    //Gestion du corps du serpent sans sa tete Olivier
    gestionResteSerpent(ancienDirection)
    {
        switch (ancienDirection) {
            // Ancien direction Gauche
            case 37:
                for(let i = 1; i < this.corps.length; i++) 
                {
                    if (this.corps[i].positionX > this.corps[i].ancienPosition[0]) 
                    {}
                    else
                    {
                        if(this.corps[0].direction == 38)
                        {
                            this.corps[i].positionX = this.corps[i].ancienPosition[0];
                            this.corps[i].positionY = this.corps[i-1].positionY + this.teteSerpent.longueurCote - 2;
                            this.corps[i].vitesseX = this.corps[i-1].vitesseX;
                            this.corps[i].vitesseY = this.corps[i-1].vitesseY;
                            this.corps[i].direction = this.corps[i-1].direction;
                        }
                        if (this.corps[0].direction == 40)
                        {
                            this.corps[i].positionX = this.corps[i].ancienPosition[0];
                            this.corps[i].positionY = this.corps[i-1].positionY - this.teteSerpent.longueurCote + 2;
                            this.corps[i].vitesseX = this.corps[i-1].vitesseX;
                            this.corps[i].vitesseY = this.corps[i-1].vitesseY;
                            this.corps[i].direction = this.corps[i-1].direction;
                        }
                    }
                }

                // var i = this.condArret ;
                //     if ( i < this.corps.length) {
                //         while (this.corps[i].positionX > positionXY[0]) {
                //             return;
                //         }
                //         this.corps[i].vitesseX = this.corps[0].vitesseX;
                //         this.corps[i].vitesseY = this.corps[0].vitesseY;
                //         this.corps[i].direction = this.corps[0].direction;
                //         this.condArret++;
                //         this.gestionResteSerpent(direction,positionXY);
                //     } else {
                //         this.condArret = 1;
                //     }
                    
                break;
                //Ancien direction Droite
            case 39:
                for(let i = 1; i < this.corps.length; i++) 
                {
                    if (this.corps[i].positionX < this.corps[i].ancienPosition[0]) 
                    {}
                    else
                    {
                        if(this.corps[0].direction == 38) {
                            this.corps[i].positionY = this.corps[i-1].positionY + this.teteSerpent.longueurCote - 2;
                            this.corps[i].positionX = this.corps[i].ancienPosition[0];
                            this.corps[i].vitesseX = this.corps[i-1].vitesseX;
                            this.corps[i].vitesseY = this.corps[i-1].vitesseY;
                            this.corps[i].direction = this.corps[i-1].direction;
                        }
                        if(this.corps[0].direction == 40) {
                            this.corps[i].positionY = this.corps[i-1].positionY - this.teteSerpent.longueurCote + 2;
                            this.corps[i].positionX = this.corps[i].ancienPosition[0];
                            this.corps[i].vitesseX = this.corps[i-1].vitesseX;
                            this.corps[i].vitesseY = this.corps[i-1].vitesseY;
                            this.corps[i].direction = this.corps[i-1].direction;
                        }
                    }
                }
                // for(let i = 1; i < this.corps.length; i++) {
            
                //     if (this.corps[i].positionX < this.corps[i-1].ancienPosition[0] ) {
                //     } else {
                //         this.corps[i].vitesseX = this.corps[i-1].vitesseX;
                //         this.corps[i].vitesseY = this.corps[i-1].vitesseY;
                //         this.corps[i].direction = this.corps[i-1].direction;
                //     }
                // }
                break;
                //Ancien direction haut
            case 38:
                console.log("Je suis entre dans gestionResteSerpent dir haut");
                for(let i = 1; i < this.corps.length; i++) 
                {
                    if (this.corps[i].positionY > this.corps[i].ancienPosition[1]) 
                    {}
                    else
                    {
                        if(this.corps[0].direction == 37){
                            this.corps[i].positionY = this.corps[i].ancienPosition[1];
                            this.corps[i].positionX = this.corps[i-1].positionX + this.teteSerpent.longueurCote - 2;
                            this.corps[i].vitesseX = this.corps[i-1].vitesseX;
                            this.corps[i].vitesseY = this.corps[i-1].vitesseY;
                            this.corps[i].direction = this.corps[i-1].direction;
                        }
                        if(this.corps[0].direction == 39)
                        {
                            this.corps[i].positionY = this.corps[i].ancienPosition[1];
                            this.corps[i].positionX = this.corps[i-1].positionX - this.teteSerpent.longueurCote + 2;
                            this.corps[i].vitesseX = this.corps[i-1].vitesseX;
                            this.corps[i].vitesseY = this.corps[i-1].vitesseY;
                            this.corps[i].direction = this.corps[i-1].direction; 
                        }
                    }
                }
                
                // var i = this.condArret ;
                // if ( i < this.corps.length) {
                //     if (this.corps[i].positionY > positionXY[1])
                //     {
                //         this.gestionResteSerpent(direction,positionXY);
                //     }
                //     else
                //     {
                //         this.corps[i].vitesseX = this.corps[0].vitesseX;
                //         this.corps[i].vitesseY = this.corps[0].vitesseY;
                //         this.corps[i].direction = this.corps[0].direction;
                //         this.condArret++;
                //     }
                // } else {
                //     this.condArret = 1;
                // }
                break;

                //Ancien direction Bas
            case 40:

                for(let i = 1; i < this.corps.length; i++) 
                {
                    if (this.corps[i].positionY < this.corps[i].ancienPosition[1]) 
                    {}
                    else
                    {
                        if (this.corps[0].direction == 37 ) {
                            this.corps[i].positionY = this.corps[i].ancienPosition[1];
                            this.corps[i].positionX = this.corps[i-1].positionX + this.teteSerpent.longueurCote - 2;
                            this.corps[i].vitesseX = this.corps[i-1].vitesseX;
                            this.corps[i].vitesseY = this.corps[i-1].vitesseY;
                            this.corps[i].direction = this.corps[i-1].direction;
                        }
                        if (this.corps[0].direction == 39) {
                            this.corps[i].positionY = this.corps[i].ancienPosition[1];
                            this.corps[i].positionX = this.corps[i-1].positionX - this.teteSerpent.longueurCote + 2;
                            this.corps[i].vitesseX = this.corps[i-1].vitesseX;
                            this.corps[i].vitesseY = this.corps[i-1].vitesseY;
                            this.corps[i].direction = this.corps[i-1].direction;
                        }

                    }
                }
                
                // for(let i = 1; i < this.corps.length; i++) {
            
                //     if (this.corps[i].positionX > this.corps[i-1].ancienPosition[0] ) {
                //         this.corps[i].vitesseX = -2;
                //         this.corps[i].direction = 37;
                //     } else {
                //         this.corps[i].vitesseX = 0;
                //         this.corps[i].vitesseY = 2;
                //         this.corps[i].direction = this.corps[i-1].direction;
                //     }
                // }

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
