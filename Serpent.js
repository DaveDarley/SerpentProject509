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
    }

    //Fonction renvoyant la position de la tete du serpent 
    positionTete()
    {
        return this.corps[0].renvoiePosition();
    }

    //Fonction permettant de mettre a jour les position du corps du serpent
    mettreAJourSerpent(ancienTeteX,ancienTeteY,ancienDirect){

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

    // Fonction permettant de gerer le repositionnnement du reste du corps du sereptn en focntion de la direction prise par la tete
    gestionMouvementSerpent(i,ancienX,ancienY,ancienDirection){

        if(this.corps.length > 1){ // si c'est juste la tete , c pas necessaire de gerer le mouvement du serpent

            //console.log(this.corps.length);
            //console.log(this.corps[i].positionX);
            //debugger;

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

    //Fonction permettant d'agrandir la taille du serpent
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

    // Si utilisateur presse rien ,le serpent suit la direction de la tete
    // Doit aussi gerer la vitesse du serpent
    //Fonction permettant d'avancer le serpent sams entrees de l'uitlisateur
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