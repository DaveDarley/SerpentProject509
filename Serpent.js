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
        this.ancienDirection  = 0

        this.whichCanvas = 0; // pour que le serpent puisse savoir dans quelle cadre il joue
    }

    //Fonction renvoyant la position de la tete du serpent 
    positionTete()
    {
        return this.corps[0].renvoiePosition();
    }

    /*
    Fonction permettant de mettre a jour les position du corps du serpent, plus
    precisement cette fonction gere comment le reste du serpent bouge qd l'utilisateur
    change la direction de la tete du serpent
    */
    
    mettreAJourSerpent(ancienTeteX,ancienTeteY,ancienDirect){

        if(this.whichCanvas == 2){ // gere cadre sans collisions
            if (this.corps[0].positionX  > 700){
                this.corps[0].positionX = 0 - this.teteSerpent.longueurCote;
            }   
            if(this.corps[0].positionX + this.teteSerpent.longueurCote < 0){
                this.corps[0].positionX = 700;
            }
            if(this.corps[0].positionY > 700) {
                this.corps[0].positionY = 0 - this.teteSerpent.longueurCote;
            }
            if(this.corps[0].positionY + this.teteSerpent.longueurCote < 0 ){
                this.corps[0].positionY = 700;
            }
        }
        this.gestionMouvementSerpent(1,ancienTeteX,ancienTeteY,ancienDirect);
    }

    // Pour dessiner le serpent a chaque fois !!
    dessiner(context,image)
    {
        var longueurCote = this.teteSerpent.longueurCote;
        for(let i = 0; i < this.corps.length; i++) {
            var positSerp= this.corps[i].renvoiePosition();
            context.drawImage(image, positSerp[0], positSerp[1], longueurCote,longueurCote);
        }

    }

   /*
   Comment bouge le reste du serpent qd la tete change de direction :

   Comme on a stocke le corps du serpent dans un tableau, chaque corps
   du serpent a les infos suivantes(x,y,direction,....) , et donc je 
   parcours mon tableau et les infos de index i deviennent les infos 
   de i+1 et les infos de i+1 deviennent i+2 , ainsi de suite.
   */
    gestionMouvementSerpent(i,ancienX,ancienY,ancienDirection){

        if(this.corps.length > 1){ // si c'est juste la tete , c pas necessaire de gerer le mouvement du serpent

            if(i == this.corps.length){
                return;
            }else{
                var xPreced = this.corps[i].positionX;
                var yPreced = this.corps[i].positionY;
                var directPreced = this.corps[i].direction;
    
                this.corps[i].positionX = ancienX;
                this.corps[i].positionY = ancienY;
                this.corps[i].direction = ancienDirection;
    
                var a = i+1;
    
               this.gestionMouvementSerpent(a,xPreced,yPreced,directPreced);
            }
        }

    }

    /*
    Agrandir la taille du serpent qd il mange une nourriture:

    On ajoute une nouvelle case dans le tableau qui contient toutes les cases du serpent
    Pour savoir la direction ou doit aller la nouvelle case ajoutee,
    on suit la direction de la derniere case du serpent 
    NB: Tous les cases du serpent sont stockes dans un tableau 
    */
    agrandirSerpent(){
        var madirection = this.corps[this.corps.length - 1].direction;
        let allongement = new Forme(this.teteSerpent.formeSerp,25);
        var position = this.corps.length-1;
        switch(madirection){

            case 37:

                allongement.positionX = this.corps[position].positionX + this.teteSerpent.longueurCote + 2;
                allongement.positionY = this.corps[position].positionY;
                allongement.direction = this.corps[position].direction;
                break;
            case 39:
                allongement.positionX = this.corps[position].positionX  - this.teteSerpent.longueurCote - 2;
                allongement.positionY = this.corps[position].positionY;
                allongement.direction = this.corps[position].direction;
                break;
            case 38:
                allongement.positionX = this.corps[position].positionX  ;
                allongement.positionY = this.corps[position].positionY + this.teteSerpent.longueurCote + 2;
                allongement.direction = this.corps[position].direction;
                break;
            case 40:
                allongement.positionX = this.corps[position].positionX ;
                allongement.positionY = this.corps[position].positionY - this.teteSerpent.longueurCote - 2;
                allongement.direction = this.corps[position].direction;
                break;
        }
        this.corps.push(allongement);
    }

    //Fonction renvoyant les points gagnes 
    pointGagne()
    {
        return this.pointGagne;
    }

   /*
   Si l'utilisateur change pas la direction de la tete du serpent,
   le serpent doit continuer de bouger dans meme direction qu'il
   etait entrain de bouger.

   Disons si le serpent allait a gauche , je deplace tete du serpent 
   vers la gauche , la tete du serpent garde la meme direction qu'il etait , 
   j'appelle ensuite mettreAJourSerpent qui s'occupe de bouger le reste du serpent.
   */
   bougerSansUser(){
        var serpent = this;
        var directTeteSerpent = this.corps[0].direction;
        var ancienTeteX ;
        var ancienTeteY ;
        var ancienDirect ;
        switch(directTeteSerpent) {
            //Gauche
          case 37:
            ancienTeteX = serpent.corps[0].positionX ;
            ancienTeteY = serpent.corps[0].positionY ;
            ancienDirect = serpent.corps[0].direction;
            serpent.corps[0].positionX = serpent.corps[0].positionX  - serpent.corps[0].longueurCote ;
            serpent.corps[0].direction = 37;
        break;
            //Droite
        case 39:
            ancienTeteX = serpent.corps[0].positionX ;
            ancienTeteY = serpent.corps[0].positionY ;
            ancienDirect = serpent.corps[0].direction;
            serpent.corps[0].positionX = serpent.corps[0].positionX  + serpent.corps[0].longueurCote ;
            serpent.corps[0].direction = 39;
        break;
            //Haut
        case 38:
            ancienTeteX = serpent.corps[0].positionX ;
            ancienTeteY = serpent.corps[0].positionY ;
            ancienDirect = serpent.corps[0].direction;
            serpent.corps[0].positionY = serpent.corps[0].positionY  - serpent.corps[0].longueurCote ;
            serpent.corps[0].direction = 38;
        break;
            //Bas
        case 40:
            ancienTeteX = serpent.corps[0].positionX ;
            ancienTeteY = serpent.corps[0].positionY ;
            ancienDirect = serpent.corps[0].direction;
            serpent.corps[0].positionY = serpent.corps[0].positionY  + serpent.corps[0].longueurCote;
            serpent.corps[0].direction = 40;
        break;
        }
        serpent.mettreAJourSerpent(ancienTeteX,ancienTeteY,ancienDirect);
    }


}