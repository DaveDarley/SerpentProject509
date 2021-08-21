

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

frame(layout,id){

  let positionX = this.getX();
  let positionY = this.getY();
  let grosseur = this.getGrosseurNourriture();

  if (positionX + grosseur <= 0 || positionX >= 700 || positionY + grosseur <= 0 || positionY >= 700){
      //layout.clearRect(0,0,700,700);
      this.isOnCanvas = false;
      //clearInterval(id); // arreter setInterval ; ca n'appelle plus frame
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
  // pour test
  /*console.log("-----------------------");
  console.log("Ma nourriture se trouve en positionX :"+ this.posX + "positionY: "+ this.posY);
  console.log("Ma nourriture va en direction :"+ this.direction);
  console.log("Ma nourriture se deplace a vitesse de "+ this.vitesse);
  console.log("-----------------------");*/

  this.isOnCanvas = true;
  let id = null;
 // clearInterval(id);
  //https://stackoverflow.com/questions/457826/pass-parameters-in-setinterval-function
  // Ideal : stackoverflow.com/a/7890978/2803565
  // ou : https://stackoverflow.com/questions/7890685/referencing-this-inside-setinterval-settimeout-within-object-prototype-methods/7890978#7890978
  //id = setInterval( () => this.frame(layout,id), this.vitesse);

  this.frame(layout,id);
}

/*
Ces 2 fonctions permettent d'avoir la position actuelle d'une nourriture
sur le canvas
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