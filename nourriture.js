/** Une nourriture */
export default class Nourriture {

  /** Création du serpent avec les paramètres suivants: l'image de la nourriture, les points de vie que 
   * donne la nourriture, sa grosseur, son abscisse, son ordonnée, sa vitesse, sa direction, variable 
   * indiquant si la nourriture est sur le canvas ou pas*/
  constructor(image,ptsDeVie,grosseur,posX,posY,vitesse,direction,isOnCanvas){
    this.image = image;
    this.ptsDeVie = ptsDeVie;
    this.grosseur = grosseur;
    this.posX = posX;
    this.posY = posY;
    this.vitesse = vitesse;
    this.direction = direction;
    this.isOnCanvas = false; 
  }

  /* Attribut: isOnCanvas de chaque nourriture:
  Je place mes nourritures dans un tableau, et je parcours ce tableau pour dessiner les nourritures sur le
  canvas. Si isOncanvas == true, c'est que le serpent n'a pas manger la nourriture et je dois le dessiner
  sur le canvas. Si isOnCanvas == false, le serpent a mangé ma nourriture et je ne le redessine plus.
  */

  /* Cette fonction s'occupe de faire bouger la nourriture sur le canvas.
  Ce déplacement se fait en fonction de la direction de la nourriture.
  Les directions possibles:
  Soit une étoile à 8 têtes, ma nourriture est placée aléatoirement sur une de ces têtes , et se déplace
  sur le canvas.
  */
  frame(layout){

    let positionX = this.getX();
    let positionY = this.getY();
    let grosseur = this.getGrosseurNourriture();

    if (positionX + grosseur <= 0 || positionX >= 700 || positionY + grosseur <= 0 || positionY >= 700){
      this.isOnCanvas = false;
    }else{
      switch(this.direction){

        case 0:
          layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
          this.posX = this.posX - 0.4;
          this.posY = this.posY - 0.4;
        break;

        case 1:
          layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
          this.posY = this.posY - 0.4;
        break;

        case 2:
          layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
          this.posX = this.posX + 0.4;
          this.posY = this.posY - 0.4;
        break;

        case 3:
          layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
          this.posX = this.posX + 0.4;
        break;

        case 4:
          layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
          this.posX = this.posX + 0.4;
          this.posY = this.posY + 0.4;
        break;

        case 5:
          layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
          this.posY = this.posY + 0.4;
        break;

        case 6:
          layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
          this.posX = this.posX - 0.4;
          this.posY = this.posY + 0.4;
        break;

        case 7:
          layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
          this.posX = this.posX - 0.4;
        break;
      }
    }
  }

  /** Fonction gérant les déplacements des nourritures */ 
  deplacementNourriture(layout){
    this.isOnCanvas = true;
    // clearInterval(id);
    //https://stackoverflow.com/questions/457826/pass-parameters-in-setinterval-function
    // Ideal : stackoverflow.com/a/7890978/2803565
    // ou : https://stackoverflow.com/questions/7890685/referencing-this-inside-setinterval-settimeout-within-object-prototype-methods/7890978#7890978
    //id = setInterval( () => this.frame(layout,id), this.vitesse);

    this.frame(layout);
  }

  /** Renvoyer l'abscisse de la nourriture sur le canvas */
  getX(){
    return this.posX;
  }

  /** Renvoyer l'ordonnée de la nourriture sur le canvas */
  getY(){
    return this.posY;
  }

  /** Renvoyer la grosseur de la nourriture sur le canvas */
  getGrosseurNourriture(){
    return this.grosseur;
  }

}