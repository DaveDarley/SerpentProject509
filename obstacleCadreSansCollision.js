/** Classe qui s'occupe de placer les obstacles sur le canvas ne prennant pas en compte les collisions
avec le cadre */ 
export default class obstacleSansCollision {

    /** Création de l'objet obstacleSansCollision */
    constructor(image, grosseur , posX, posY , ptsDeVieEnleves) {
            this.image = image;
            this.grosseur = grosseur;
            this.posX = posX;
            this.posY = posY;
            this.ptsDeVieEnleves = ptsDeVieEnleves;
    }

    /*
    Pour le canvas ne prennant pas en compte les collisions avec le cadre, cette fonction renvoie 
    les positions (un tableau double [[x,y], ...]) auxquelles devraient être placés les obstacles sur le
    canvas; On s'occupe aussi ici d'empêcher 2 obstacles d'être placés à la même position sur le canvas.
    */
    placeObstacleSansCollision(tabImages,mesPositions,index){

        var newIndex = index+1; ; // Pour changer l'index dans mon tableau 
        if(tabImages.length == index){
            return mesPositions;  
        }else{
            // Position (x,y) choisie pour le nouvel obstacle
            var xPosition = (Math.floor(Math.random() * 7)*100); 
            var yPosition = (Math.floor(Math.random() * 7)*100); 

            if(mesPositions.length == 0){
                var newTab = [];
                newTab.push(xPosition);newTab.push(yPosition);
                mesPositions.push(newTab);
                return this.placeObstacleSansCollision(tabImages,mesPositions,newIndex);
            }else{
                // Vérification pour savoir si il n'y a pas déja un obstacle à la position (x,y) choisie pour le nouvelle obstacle
                for(var i = 0; i<mesPositions.length; i++){
                    if(mesPositions[i][0] == xPosition && mesPositions[i][1] == yPosition){
                        return this.placeObstacleSansCollision(tabImages,mesPositions,index);
                    }
                }
                // Si il n'y a pas déjà un obstacle à la position choisie par l'obstacle
                // on met le nouveau obstacle a cette position
                var newTab = [];
                newTab.push(xPosition);newTab.push(yPosition);
                mesPositions.push(newTab);
                return this.placeObstacleSansCollision(tabImages,mesPositions,newIndex);
            }
        }
    }

    /** Placer l'obstacle sur le canvas */
    placerMonObstacle(layout){
        layout.drawImage(this.image,this.posX,this.posY,this.grosseur,this.grosseur);
    }

    /** Renvoyer l'abcisse de l'obstacle */
    getX(){
        return this.posX;
    }

    /** Renvoyer l'ordonnée de l'obstacle */
    getY(){
        return this.posY;
    }

    /** Renvoyer la grosseur de l'obstacle */
    getGrosseurObsSansColli(){
        return this.grosseur;
    }
}