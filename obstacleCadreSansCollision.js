// Classe qui s'occupe de placer les obstacles sur le canvas dans le cadre sans collision

export default class obstacleSansCollision {
    constructor(image, grosseur , posX, posY , ptsDeVieEnleves) {
            this.image = image;
            this.grosseur = grosseur;
            this.posX = posX;
            this.posY = posY;
            this.ptsDeVieEnleves = ptsDeVieEnleves;
    }


    /*
        Dans le cadre du "cadre sans collisions", cette fonction renvoie 
        la position(un tableau double [[x,y]]) a laquelle devrait etre place les obstacles sur le canvas;
        On s'occupe aussi ici d'empecher 2 obstacles d'etre place a la meme position sur le canvas.
    */
    placeObstacleSansCollision(tabImages,mesPositions,index){

        var newIndex = index+1; ; // pour changer index dans mon tableau 
        if(tabImages.length == index){
            return mesPositions;  
        }else{
            // (x,y) choisit par le nouveau obstacle
            var xPosition = (Math.floor(Math.random() * 7)*100); 
            var yPosition = (Math.floor(Math.random() * 7)*100); 

            if(mesPositions.length == 0){
                var newTab = [];
                newTab.push(xPosition);newTab.push(yPosition);
                mesPositions.push(newTab);
                return this.placeObstacleSansCollision(tabImages,mesPositions,newIndex);
            }else{
                // Ici je verifie si il n'y a pas deja un obstacle au (x,y) choisit pour le nouvelle obstacle
                for(var i = 0; i<mesPositions.length; i++){
                    if(mesPositions[i][0] == xPosition && mesPositions[i][1] == yPosition){
                        return this.placeObstacleSansCollision(tabImages,mesPositions,index);
                    }
                }
                // Si j'arrive ici c qu'il n'y a pas deja un x ou y a la position choisit par l'obstacle
                var newTab = [];
                newTab.push(xPosition);newTab.push(yPosition);
                mesPositions.push(newTab);
                return this.placeObstacleSansCollision(tabImages,mesPositions,newIndex);
            }
        }
    }

    placerMonObstacle(layout){
        layout.drawImage(this.image,this.posX,this.posY,this.grosseur,this.grosseur);
    }

    getX(){
        return this.posX;
    }
    getY(){
        return this.posY;
    }
    getGrosseurObsSansColli(){
        return this.grosseur;
    }


}