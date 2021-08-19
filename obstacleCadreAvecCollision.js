export default class ObsCadreAvecColli {

    constructor(image,ptsDeVieEnleves,grosseur,posX,posY,direction,isOnCanvas,xDepart,yDepart){
      this.image = image;  // l'image qui represente la nourriture
      this.ptsDeVieEnleves = ptsDeVieEnleves; // le pts de vie que represente cette nourriture
      this.grosseur = grosseur;
      this.posX = posX;
      this.posY = posY;
      this.direction = direction;  // ou l'obstacle sort par rapport au mur (Nord sud est ouest)
      this.isOnCanvas = isOnCanvas;
      this.xDepart = xDepart;
      this.yDepart = yDepart;
    }

    
    
    deplacementObs(layout){

        let positionX = this.getX();
        let positionY = this.getY();
        let grosseur = this.getGrosseurObstacle();
        this.isOnCanvas = true;

        // Qd l'obstacle quitte le canvas on le redessine plus
        if (positionX + this.grosseur < 0 || positionX >= 700 || positionY + this.grosseur < 0 || positionY >= 700){
           // layout.clearRect(0,0,700,700);
            this.isOnCanvas = false;
        }else{

            switch(this.direction){

                case 0: // Mur Nord
                    console.log("deplacement a partir de 0");
                    layout.drawImage(this.image, this.posX,this.posY ,grosseur,grosseur); 

                    if(this.xDepart >= 400){this.posX += 0.4;}else{this.posX -= 0.4;}
                    this.posY = this.posY + 0.4;
                    //layout.drawImage(this.image, this.posX,this.posY - this.grosseur,grosseur,grosseur);  // this.posY - this.grosseur pour une entree smooth sur le canvas
                break;
          
                case 1:  // Mur est
                  console.log("deplacement a partir de 1");
                  layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
                  if(this.yDepart>=400){ this.posY -= 0.4;}else{this.posY += 0.4;}
                  this.posX = this.posX - 0.4;
                break;
          
                case 2: // Mur sud
                  console.log("deplacement a partir de  2");
                  layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
                  if(this.xDepart >= 400){this.posX -= 0.4;}else{this.posX += 0.4;}
                  this.posY = this.posY - 0.4;
                break;
          
                case 3:  // Mur ouest
                  console.log("deplacement a partir de 3");
                  layout.drawImage(this.image, this.posX ,this.posY ,grosseur,grosseur);
                  if(this.yDepart>=400){ this.posY -= 0.4;}else{this.posY += 0.4}
                  this.posX = this.posX + 0.4;
                 // layout.drawImage(this.image, this.posX - this.grosseur,this.posY ,grosseur,grosseur);
                break;
            }

        }
    }

    getX(){
        return this.posX;
      }
      getY(){
        return this.posY;
      }
      getGrosseurObstacle(){
        return this.grosseur;
      }
}