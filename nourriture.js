

 export default class Nourriture {

constructor(image,ptsDeVie,height,width,posX,posY,vitesse,direction){
  this.image = image;  // l'image qui represente la nourriture
  this.ptsDeVie = ptsDeVie; // le pts de vie que represente cette nourriture
  this.height = height;
  this.width = width;
  this.posX = posX;
  this.posY = posY;
  this.vitesse = vitesse;
  this.direction = direction;
}


// Comprehension pour la vitesse : 
// on se deplace un pixel a la fois , mais la vitesse a laquelle on ft ce deplacement modifie comment ca apparait a l'ecran


 deplacementNourriture(layout){
  // pour test
  console.log("-----------------------");
  console.log("Ma nourriture se trouve en positionX :"+ this.posX + "positionY: "+ this.posY);
  console.log("Ma nourriture va en direction :"+ this.direction);
  console.log("Ma nourriture se deplace a vitesse de "+ this.vitesse);
  console.log("-----------------------");

}


frame(layout,id){

  let positionX = this.getX();
  let positionY = this.getY();
  let grosseur = this.getGrosseurNourriture();

  if (positionX <= 0 || positionX >= 700 || positionY <= 0 || positionY >= 700){
      clearInterval(id); // arreter setInterval ; ca n'appelle plus frame
      // je dois enlever la nourriture du canvas!!
  }else{
    switch(this.direction){

      case 0:
        console.log("deplacement vers 0");
        console.log("Le nouvel x est: "+this.posX);
        console.log("Le nouvel y est: "+this.posY);

        layout.clearRect(positionX,positionY,700,700); // pour enlever le "after Image" qd la nourriture se deplace
        
        var img1 = new Image();
        // attendre pour que l'image soit load avant de le dessiner!!
        img1.addEventListener('load', function(){
          layout.drawImage(img1, positionX,positionY,40,40);
        });
        img1.src = this.image;
        this.posX = this.posX - 1;
        this.posY = this.posY - 1;
      break;

      case 1:
        console.log("deplacement vers 1");
        layout.clearRect(positionX,positionY,700,700); // pour enlever le "after Image" qd la nourriture se deplace
        var img1 = new Image();
        // attendre pour que l'image soit load avant de le dessiner!!
        img1.addEventListener('load', function(){
          layout.drawImage(img1, positionX,positionY,grosseur,grosseur);
        });
        img1.src = this.image;
        this.posY = this.posY - 1;
      break;

      case 2:
        console.log("deplacement vers 2");
        layout.clearRect(positionX,positionY,700,700); // pour enlever le "after Image" qd la nourriture se deplace
        var img1 = new Image();
        // attendre pour que l'image soit load avant de le dessiner!!
        img1.addEventListener('load', function(){
          layout.drawImage(img1, positionX,positionY,grosseur,grosseur);
        });
        img1.src = this.image;
        this.posX = this.posX + 1;
        this.posY = this.posY - 1;
      break;

      case 3:
        console.log("deplacement vers 3");
        layout.clearRect(positionX,positionY,700,700); // pour enlever le "after Image" qd la nourriture se deplace
        var img1 = new Image();
        // attendre pour que l'image soit load avant de le dessiner!!
        img1.addEventListener('load', function(){
          layout.drawImage(img1, positionX,positionY,grosseur,grosseur);
        });
        img1.src = this.image;
        this.posX = this.posX + 1;
    
      break;

      case 4:
        console.log("deplacement vers 4");
        layout.clearRect(positionX,positionY,700,700); // pour enlever le "after Image" qd la nourriture se deplace
        var img1 = new Image();
        // attendre pour que l'image soit load avant de le dessiner!!
        img1.addEventListener('load', function(){
          layout.drawImage(img1, positionX,positionY,grosseur,grosseur);
        });
        img1.src = this.image;
        this.posX = this.posX + 1;
        this.posY = this.posY + 1;
      break;

      case 5:
        console.log("deplacement vers 5");
        layout.clearRect(positionX,positionY,700,700); // pour enlever le "after Image" qd la nourriture se deplace
        var img1 = new Image();
        // attendre pour que l'image soit load avant de le dessiner!!
        img1.addEventListener('load', function(){
          layout.drawImage(img1, positionX,positionY,grosseur,grosseur);
        });
        img1.src = this.image;
        this.posY = this.posY + 1;
      break;

      case 6:
        console.log("deplacement vers 6");
        layout.clearRect(positionX,positionY,700,700); // pour enlever le "after Image" qd la nourriture se deplace
        var img1 = new Image();
        // attendre pour que l'image soit load avant de le dessiner!!
        img1.addEventListener('load', function(){
          layout.drawImage(img1, positionX,positionY,grosseur,grosseur);
        });
        img1.src = this.image;
        this.posX = this.posX - 1;
        this.posY = this.posY + 1;
      break;

      case 7:
        console.log("deplacement vers 7");
        layout.clearRect(positionX,positionY,700,700); // pour enlever le "after Image" qd la nourriture se deplace
        var img1 = new Image();
        // attendre pour que l'image soit load avant de le dessiner!!
        img1.addEventListener('load', function(){
          layout.drawImage(img1, positionX,positionY,grosseur,grosseur);
        });
        img1.src = this.image;
        this.posX = this.posX - 1;
      break;
    }


  }
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
  return this.height;
}




}