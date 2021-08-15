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
        Dans le cadre du cadre sans collisions , cette fonction renvoie 
        la position(un tableau doucle [[x,y]]) a laquelle devrait etre place les obstacles sur le canvas
    */
    placeObstacleSansCollision(tabImages,mesPositions){

        if(tabImages.length == 0){
            console.log("Mon tableau est: "+ mesPositions);
            return mesPositions;
        }else{
            var xPosition = 200+(Math.floor(Math.random() * 4)*100);
            var yPosition = 200+(Math.floor(Math.random() * 4)*100);

            if(mesPositions.length == 0){
                var newTab = [];
                newTab.push(xPosition);newTab.push(yPosition);
                mesPositions.push(newTab);
                tabImages.pop();
                return this.placeObstacleSansCollision(tabImages,mesPositions);
            }else{
                for(var i = 0; i<mesPositions.length; i++){
                    if(mesPositions[i][0] == xPosition && mesPositions[i][1] == yPosition){
                        return this.placeObstacleSansCollision(tabImages,mesPositions);
                    }
                }
                // Si j'arrive ici c qu'il n'y a pas deja un x ou y a la position choisit par l'obstacle
                var newTab = [];
                newTab.push(xPosition);newTab.push(yPosition);
                mesPositions.push(newTab);
                tabImages.pop();
                return this.placeObstacleSansCollision(tabImages,mesPositions);
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