

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

  console.log("je suis bien entre ici");
  let positionX = this.getX();
  let positionY = this.getY();
  let id = null;
  clearInterval(id);
  id = setInterval(frame,this.vitesse); // appelle la fonction frame chaque 1 seconde

  function frame(){
    if (positionX <= 0 || positionX >= 700 || positionY <= 0 || positionY >= 700){
      clearInterval(id); // arreter setInterval ; ca n'appelle plus frame
    }else{
      switch(this.direction){
        case 0:
          this.posX = this.posX - 1;
          this.posY = this.posY - 1;
          this.loadImages(this.image, function(images){
            layout.drawImage(this.image,this.posX,this.posY,this.width,this.height);
        })
        break;

        case 1:
          this.posY = this.posY - 1;
          this.loadImages(this.image, function(images){
            layout.drawImage(this.image,this.posX,this.posY,this.width,this.height);
        })
        break;

        case 2:
          this.posX = this.posX + 1;
          this.posY = this.posY - 1;
          this.loadImages(this.image, function(images){
            layout.drawImage(this.image,this.posX,this.posY,this.width,this.height);
        })
        break;

        case 3:
          this.posX = this.posX + 1;
          this.loadImages(this.image, function(images){
            layout.drawImage(this.image,this.posX,this.posY,this.width,this.height);
        })
        break;

        case 4:
          this.posX = this.posX + 1;
          this.posY = this.posY + 1;
          this.loadImages(this.image, function(images){
            layout.drawImage(this.image,this.posX,this.posY,this.width,this.height);
        })
        break;

        case 5:
          this.posY = this.posY + 1;
          this.loadImages(mesImages, function(images){
            layout.drawImage(this.image,this.posX,this.posY,this.width,this.height);
        })
        break;

        case 6:
          this.posX = this.posX - 1;
          this.posY = this.posY + 1;
          this.loadImages(mesImages, function(images){
            layout.drawImage(this.image,this.posX,this.posY,this.width,this.height);
        })
        break;

        case 7:
          this.posX = this.posX - 1;
          this.loadImages(mesImages, function(images){
            layout.drawImage(this.image,this.posX,this.posY,this.width,this.height);
        })
        break;
      }


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

loadImages(sources, callback){
  var images = {};
  var loadedImages = 0;
  var numImages = 0;

  for(var src in sources){ // pr savoir le nb d'images qu'on a passe a cette fonction
    numImages++;
  }
  for(var src in sources){
    images[src] = new Image();
    images[src].onload = function(){

      if (++loadedImages >= numImages){
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}



}