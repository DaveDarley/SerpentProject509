import Nourriture from "./nourriture.js";

var mesNourritures = {
    img0 : "./images/img"+ 0 + ".png",
    img1 : "./images/img"+ 1 + ".png",
    img2 : "./images/img"+ 2 + ".png",
    img3 : "./images/img"+ 3 + ".png",
    img4 : "./images/img"+ 4 + ".png",
    img5 : "./images/img"+ 5 + ".png",
    img6 : "./images/img"+ 6 + ".png"
  }



// sources aura la liste d'Images
/*function loadImages(sources, callback){
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
}*/


function remplirCanvas(collisionOuPas){

  console.log("je suis rentre ici canvas");
  var canvas;
  var nbNourriture = 0;
  var mesNourritures = [];



  // Pour savoir dans quel canvas le joueur est entrain de jouer
  if(collisionOuPas==1){
    canvas = document.getElementById("avecColli");
  }else{
    canvas = document.getElementById("sansColli");
  }
  var layout = canvas.getContext("2d");

  /*let nourriture0 = new Nourriture(mesNourritures.img0,10,20,20);
  let nourriture1 = new Nourriture(mesNourritures.img1,10,20,20);
  let nourriture2 = new Nourriture(mesNourritures.img2,10,20,20);
  let nourriture3 = new Nourriture(mesNourritures.img3,10,20,20);
  let nourriture4 = new Nourriture(mesNourritures.img4,10,20,20);
  let nourriture5 = new Nourriture(mesNourritures.img5,10,20,20);
  let nourriture6 = new Nourriture(mesNourritures.img6,10,20,20);*/

  while(1){
    // NB on a un canvas de 700*700
    if(nbNourriture <= 1){ // pour le debut jveux pas avoir plus de 2 nourritures sur le canvas en meme temps
      nbNourriture ++;
      var xDepart = Math.floor(Math.random() *8) * 100; 
      var yDepart = Math.floor(Math.random() *6) * 100;
      var direction = Math.floor(Math.random() *8);
      var grosseur = (Math.floor(Math.random() *4) * 10) + 20; // grosseur entre 20 px et 50 px
      var vitesse = Math.floor(Math.random() *8) * 10;  // ici c'est un peu arbitraire
      var nourriture = Math.floor(Math.random() *7) + "";
      var ptsDeVie = Math.floor(Math.random() *9) + 1;

      let maNourriture = new Nourriture(mesNourritures.img+nourriture ,ptsDeVie,grosseur,grosseur,xDepart,yDepart,vitesse,direction);
      mesNourritures.push(maNourriture);
      maNourriture.deplacementNourriture(layout);
    }

    // comment savoir qu'une nourriture n'est plus sur le canvas:
   /* for(var i = 0; i<nbNourriture ; i++){
        
    }*/

  }

/*  loadImages(mesImages, function(images){
    layout.drawImage(images.img0,0,0,40,40);
    layout.drawImage(images.img1,100,200,40,40);
    layout.drawImage(images.img2,400,200,40,40);
    layout.drawImage(images.img3,50,100,40,40);
    layout.drawImage(images.img4,300,200,40,40);
    layout.drawImage(images.img5,600,600,40,40);
    layout.drawImage(images.img6,700,700,40,40);

})*/

}

remplirCanvas(1);