

 export default class Nourriture {

constructor(image,ptsDeVie,height,width,posX,posY,vitesse,direction,isOnCanvas){
  this.image = image;  // l'image qui represente la nourriture
  this.ptsDeVie = ptsDeVie; // le pts de vie que represente cette nourriture
  this.height = height;
  this.width = width;
  this.posX = posX;
  this.posY = posY;
  this.vitesse = vitesse;
  this.direction = direction;
  this.isOnCanvas = false;

}


// Comprehension pour la vitesse : 
// on se deplace un pixel a la fois , mais la vitesse a laquelle on ft ce deplacement modifie comment ca apparait a l'ecran



frame(layout,id){

  let positionX = this.getX();
  let positionY = this.getY();
  let grosseur = this.getGrosseurNourriture();

  

  if (positionX <= 0 || positionX >= 700 || positionY <= 0 || positionY >= 700){
      layout.clearRect(0,0,700,700);
      this.isOnCanvas = false;
      clearInterval(id); // arreter setInterval ; ca n'appelle plus frame
  }else{
    switch(this.direction){

      case 0:

      console.log("deplacement 0");

        layout.clearRect(0,0,700,700); // pour enlever le "after Image" qd la nourriture se deplace
        if((this.imgOK(this.image))){
          layout.drawImage(this.image, positionX,positionY,40,40);
        }else{
          var img1 = new Image();
          // attendre pour que l'image soit load avant de le dessiner!!
          img1.addEventListener('load', function(){
            layout.drawImage(img1, positionX,positionY,40,40);
          });
          img1.src = this.image;
        }
        

        this.posX = this.posX - 1;
        this.posY = this.posY - 1;
      break;

      case 1:
        console.log("deplacement vers 1");
        layout.clearRect(0,0,700,700); // pour enlever le "after Image" qd la nourriture se deplace
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
        layout.clearRect(0,0,700,700); // pour enlever le "after Image" qd la nourriture se deplace
     
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
        layout.clearRect(0,0,700,700); // pour enlever le "after Image" qd la nourriture se deplace
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
        layout.clearRect(0,0,700,700); // pour enlever le "after Image" qd la nourriture se deplace
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
        layout.clearRect(0,0,700,700); // pour enlever le "after Image" qd la nourriture se deplace
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
        layout.clearRect(0,0,700,700); // pour enlever le "after Image" qd la nourriture se deplace
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
        layout.clearRect(0,0,700,700); // pour enlever le "after Image" qd la nourriture se deplace
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

 deplacementNourriture(layout){
  // pour test
  console.log("-----------------------");
  console.log("Ma nourriture se trouve en positionX :"+ this.posX + "positionY: "+ this.posY);
  console.log("Ma nourriture va en direction :"+ this.direction);
  console.log("Ma nourriture se deplace a vitesse de "+ this.vitesse);
  console.log("-----------------------");

  this.isOnCanvas = true;
  let id = null;
 // clearInterval(id);
  //https://stackoverflow.com/questions/457826/pass-parameters-in-setinterval-function
  // Ideal : stackoverflow.com/a/7890978/2803565
  // ou : https://stackoverflow.com/questions/7890685/referencing-this-inside-setinterval-settimeout-within-object-prototype-methods/7890978#7890978
  //id = setInterval( () => this.frame(layout,id), this.vitesse);

  this.frame(layout,id);
}

getX(){
  return this.posX;
}
getY(){
  return this.posY;
}
getGrosseurNourriture(){
  return this.height;
}

 imgOK(img) {
  if (!img.complete) {
      return false;
  }
  if (typeof img.naturalWidth != "undefined" && img.naturalWidth == 0) {
      return false;
  }
  return true;
}



/*
Ces 2 fonctions permettent d'avoir la position actuelle d'une nourriture
sur le canvas
*/





}