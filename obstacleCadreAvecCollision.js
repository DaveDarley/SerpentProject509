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

    /*
    Idee:
    Mes obstacles sortent des murs ; Qd il quitte le canvas isOnCanvas devient FALSE ce qui 
    signifie de ne plus dessiner cet obstacle sur le Canvas.
    */
    deplacementObs(layout){

        let positionX = this.getX();
        let positionY = this.getY();
        let grosseur = this.getGrosseurObstacle();
        this.isOnCanvas = true;

        // Qd l'obstacle quitte le canvas on le redessine plus
        if (positionX + this.grosseur < 0 || positionX >= 700 || positionY + this.grosseur < 0 || positionY >= 700){
            this.isOnCanvas = false;
        }else{

            switch(this.direction){

                case 0: // Mur Nord
                    layout.drawImage(this.image, this.posX,this.posY ,grosseur,grosseur); 
                    if(this.xDepart >= 400){this.posX += 0.4;}else{this.posX -= 0.4;}
                    this.posY = this.posY + 0.4;
                break;
          
                case 1:  // Mur est
                  layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
                  if(this.yDepart>=400){ this.posY -= 0.4;}else{this.posY += 0.4;}
                  this.posX = this.posX - 0.4;
                break;
          
                case 2: // Mur sud
                  layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
                  if(this.xDepart >= 400){this.posX -= 0.4;}else{this.posX += 0.4;}
                  this.posY = this.posY - 0.4;
                break;
          
                case 3:  // Mur ouest
                  layout.drawImage(this.image, this.posX ,this.posY ,grosseur,grosseur);
                  if(this.yDepart>=400){ this.posY -= 0.4;}else{this.posY += 0.4}
                  this.posX = this.posX + 0.4;
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