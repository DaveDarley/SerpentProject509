

 export default class Nourriture {

constructor(image,ptsDeVie,grosseur,posX,posY,vitesse,direction,isOnCanvas){
  this.image = image;  // l'image qui represente la nourriture
  this.ptsDeVie = ptsDeVie; // le pts de vie que represente cette nourriture
  this.grosseur = grosseur;
  this.posX = posX;
  this.posY = posY;
  this.vitesse = vitesse;
  this.direction = direction;
  this.isOnCanvas = false; 
}

/*
Attribut: isOnCanvas de chaque nourriture:
Comme je place mes nourritures dans un tableau , et je parcours 
ce tableau pour dessiner les nourritures sur le canvas ; si isOncanvas == true
c'est que le serpent n'a pas manger la nourriture et je dois le dessiner sur le canvas .
Si isOnCanvas == false , le serpent a mange ma nourriture et donc je le redessine plus .
*/

/*
Cette fonction s'occupe de faire bouger la nourriture sur le canvas.
Ce deplacement se fait en fonction de la direction de la nourriture.
Les directions possibles:
Soit une etoile a 8 tetes , ma nourriture est place aleatoirement sur une de 
ces tetes , et se deplace sur le canvas.
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
        //console.log("deplacement 0");
        layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
        this.posX = this.posX - 0.4;
        this.posY = this.posY - 0.4;
      break;

      case 1:
        //console.log("deplacement vers 1");
        layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
        this.posY = this.posY - 0.4;
      break;

      case 2:
        //console.log("deplacement vers 2");
        layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
        this.posX = this.posX + 0.4;
        this.posY = this.posY - 0.4;
      break;

      case 3:
       // console.log("deplacement vers 3");
        layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
        this.posX = this.posX + 0.4;
      break;

      case 4:
        // console.log("deplacement vers 4");
        layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
        this.posX = this.posX + 0.4;
        this.posY = this.posY + 0.4;
      break;

      case 5:
       //  console.log("deplacement vers 5");
        layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
        this.posY = this.posY + 0.4;
      break;

      case 6:
       //  console.log("deplacement vers 6");
        layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
        this.posX = this.posX - 0.4;
        this.posY = this.posY + 0.4;
      break;

      case 7:
       //  console.log("deplacement vers 7");
        layout.drawImage(this.image, this.posX,this.posY,grosseur,grosseur);
        this.posX = this.posX - 0.4;
      break;
    }
  }
}

 deplacementNourriture(layout){

  this.isOnCanvas = true;
  // clearInterval(id);
  //https://stackoverflow.com/questions/457826/pass-parameters-in-setinterval-function
  // Ideal : stackoverflow.com/a/7890978/2803565
  // ou : https://stackoverflow.com/questions/7890685/referencing-this-inside-setinterval-settimeout-within-object-prototype-methods/7890978#7890978
  //id = setInterval( () => this.frame(layout,id), this.vitesse);

  this.frame(layout);
}

/*
Ces 3 fonctions permettent d'avoir la position actuelle d'une nourriture
sur le canvas , mais aussi la taille de la nourriture
*/
getX(){
  return this.posX;
}
getY(){
  return this.posY;
}
getGrosseurNourriture(){
  return this.grosseur;
}













}