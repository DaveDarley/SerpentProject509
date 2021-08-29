/** Classe qui s'occupe de placer les obstacles sur le canvas prennant en compte les collisions avec le
cadre */

export default class ObsCadreAvecColli {

  /** Création de l'objet ObsCadreAvecColli avec les paramètres suivants :
   * image de l'obstacle, les points de vie qu'il enlève, sa taille, son abscisse, son ordonnée,
   * sa direction de sortie par rapport au mur (Nord sud est ouest), variable indiquant s'il est 
   * sur le canvas ou pas, sa positionX de départ, sa positionY de départ
  */
  constructor(image,ptsDeVieEnleves,grosseur,posX,posY,direction,isOnCanvas,xDepart,yDepart){
    this.image = image;
    this.ptsDeVieEnleves = ptsDeVieEnleves;
    this.grosseur = grosseur;
    this.posX = posX;
    this.posY = posY;
    this.direction = direction;
    this.isOnCanvas = isOnCanvas;
    this.xDepart = xDepart;
    this.yDepart = yDepart;
  }

  /*
  Idee:
  Les obstacles sortent des murs. Quand ils quittent le canvas, isOnCanvas devient FALSE, ce qui 
  signifie que l'obstacle ne sera plus dessiner sur le Canvas.
  */
 /**Gérer le déplacement des objets */
  deplacementObs(layout){

    let positionX = this.getX();
    let positionY = this.getY();
    let grosseur = this.getGrosseurObstacle();
    this.isOnCanvas = true;

    // Quand l'obstacle quitte le canvas, il n'est plus redessiné
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

  /** Renvoyer l'abcisse de l'obstacle */
  getX(){
      return this.posX;
  }

  /** Renvoyer l'ordonnée de l'obstacle */
  getY(){
    return this.posY;
  }

  /** Renvoyer la grosseur de l'obstacle */
  getGrosseurObstacle(){
    return this.grosseur;
  }
}