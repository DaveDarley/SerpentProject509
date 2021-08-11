import Nourriture from "./nourriture.js";

var mesNourritures = [
  "./images/img"+ 0 + ".png",
  "./images/img"+ 1 + ".png",
  "./images/img"+ 2 + ".png",
  "./images/img"+ 3 + ".png",
  "./images/img"+ 4 + ".png",
  "./images/img"+ 5 + ".png",
  "./images/img"+ 6 + ".png"
]



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



  // Pour savoir dans quel canvas le joueur est entrain de jouer
  if(collisionOuPas==1){
    canvas = document.getElementById("avecColli");
  }else{
    canvas = document.getElementById("sansColli");
  }
  var layout = canvas.getContext("2d"); 

  while(nbNourriture < 1){ // pour pas avoir plus de 2 nourritures sur le canvas en meme temps
    // NB on a un canvas de 700*700
      nbNourriture ++;
      
      // test 
      console.log("nb de nourriture live "+ nbNourriture);

      var xDepart =  Math.floor(Math.random() *8) * 100; 
      var yDepart = Math.floor(Math.random() *6) * 100;
      var direction = Math.floor(Math.random() *8);
      var grosseur = (Math.floor(Math.random() *4) * 10) + 20; // grosseur entre 20 px et 50 px
      var vitesse =  (Math.floor(Math.random() *8)+1) * 1000;  // ici c'est un peu arbitraire
      var nourriture = Math.floor(Math.random() *7) ;
      var ptsDeVie = Math.floor(Math.random() *9) + 1;

      let maNourriture = new Nourriture(mesNourritures[nourriture],ptsDeVie,grosseur,grosseur,xDepart,yDepart,vitesse,direction);
      maNourriture.deplacementNourriture(layout);

      let id = null;
      clearInterval(id);
      // references:
      //https://stackoverflow.com/questions/457826/pass-parameters-in-setinterval-function
      
      id = setInterval( function() { maNourriture.frame(layout,id) ;} ,vitesse); // appelle la fonction frame chaque 1 seconde
    

    // comment savoir qu'une nourriture n'est plus sur le canvas:
   /* for(var i = 0; i<nbNourriture ; i++){
        
    }*/

  }


}

remplirCanvas(1);