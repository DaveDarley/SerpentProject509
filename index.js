import Nourriture from "./nourriture.js";
import ObsColli from "./obstacleCadreAvecCollision.js"

var mesNourritures = [
  "./images/img"+ 0 + ".png",
  "./images/img"+ 1 + ".png",
  "./images/img"+ 2 + ".png",
  "./images/img"+ 3 + ".png",
  "./images/img"+ 4 + ".png",
  "./images/img"+ 5 + ".png",
  "./images/img"+ 6 + ".png"
]

var mesObstacles = [
  "./images/obsColli"+ 1 + ".png",
  "./images/obsColli"+ 2 + ".png",
  "./images/obsColli"+ 3 + ".png",
  "./images/obsColli"+ 4 + ".jpeg"
]


/*
  Pour savoir dans quelle canvas on travail
  celui avec collisions ou celui sans
*/
function remplirCanvas(collisionOuPas){

  console.log("je suis rentre ici canvas");
  var canvas;
  var nourritureSurLeCanvas = [];
  var obsSurLeCanvas = [];

  // Pour savoir dans quel canvas le joueur est entrain de jouer
  if(collisionOuPas==1){
    canvas = document.getElementById("avecColli");
  }else{
    canvas = document.getElementById("sansColli");
  }
  var layout = canvas.getContext("2d"); 

  // Je load les images d'obstacles et de nourritures avant de les dessiner
  var foodImageLoaded = loadImages(mesNourritures);
  var obsImageLoaded = loadImages(mesObstacles);

  animation(layout,nourritureSurLeCanvas,foodImageLoaded,obsSurLeCanvas,obsImageLoaded);
}

// Pour l'instant je fais les obstacles apparaitrent comme les nourritures

function animation(layout,nourritureSurLeCanvas,lesNourritures,obsSurLeCanvas,obsImageLoaded){

  layout.clearRect(0,0,700,700);

  // tout nourriture qui excede les limites du canvas est enleve de la liste de nourriture a dessiner
  if(nourritureSurLeCanvas.length != 0){
    nourritureSurLeCanvas = checkFoodOnCanvas(nourritureSurLeCanvas);
  }
  if(obsSurLeCanvas.length != 0){
    obsSurLeCanvas = checkFoodOnCanvas(obsSurLeCanvas);
  }
  
  // Ce if gere les nourritures
// Pour changer le nb de nourriture sur le canvas en meme temps ; < x 
  if(nourritureSurLeCanvas.length < 2){
    var xDepart =  (Math.floor(Math.random() *5) * 100)+150; 
    var yDepart = (Math.floor(Math.random() *5) * 100)+150;
    var direction = Math.floor(Math.random() *8);
    var grosseur = (Math.floor(Math.random() *4) * 10) + 20; // grosseur entre 20 px et 50 px

    // doit modifier parce que je l'utilise pas encore lors du redessinement du canvas
    var vitesse =  (Math.floor(Math.random() *8)+1) * 1000;  // ici c'est un peu arbitraire
    var nourriture = Math.floor(Math.random() *7) ; // pour savoir quelle image afficher
    var ptsDeVie = Math.floor(Math.random() *9) + 1; 

    let maNourriture = new Nourriture(lesNourritures[nourriture],ptsDeVie,grosseur,grosseur,xDepart,yDepart,vitesse,direction,false);
    nourritureSurLeCanvas.push(maNourriture);
  }
  // Ce if gere les obstacles qui sort des murs
  if(obsSurLeCanvas.length < 2){
    var whichDirection = Math.floor(Math.random() *4); // 4 murs d'ou peuvent sortir les obstacles
    var posX; var posY;
    switch(whichDirection){
      case 0:  
        posX = (Math.floor(Math.random() *8) * 100); 
        posY = 0;
        break;
      case 1:
        posX = 700; 
        posY = (Math.floor(Math.random() *8) * 100);
        break;
      case 2:
        posX = (Math.floor(Math.random() *8) * 100); 
        posY = 700;
        break;
      case 3:
        posX = 0; 
        posY = (Math.floor(Math.random() *8) * 100);
        break;
    }
    var grosseur = (Math.floor(Math.random() *4) * 10) + 20; // grosseur entre 20 px et 50 px
    var ptsDeVieEnleves = Math.floor(Math.random() *9) + 1; 
    var imgObs = Math.floor(Math.random() *4) ; // pour savoir quelle image d'obstacle afficher 

    let monObstacle = new ObsColli(obsImageLoaded[imgObs],ptsDeVieEnleves,grosseur,posX,posY,whichDirection,false,posX,posY);
    obsSurLeCanvas.push(monObstacle);
  }


  nourritureSurLeCanvas.forEach(function(food){
    food.deplacementNourriture(layout);
 });

 obsSurLeCanvas.forEach(function(food){
  food.deplacementObs(layout);
});

 requestAnimationFrame(function() {animation(layout,nourritureSurLeCanvas,lesNourritures,obsSurLeCanvas,obsImageLoaded)});
}






/*
Fonction qui enleve tout nourriture qui ne se trouve plus sur le canvas en 
enlevant du tableau cette nourriture
*/
function checkFoodOnCanvas(tabFood){
    for(var i = 0; i<tabFood.length; i++){
       if(tabFood[i].isOnCanvas == false){
         tabFood.splice(i,1);
       }
    }
    return tabFood;
}


/*
  Function pour load tous les images de nourriture avant d'appeler requestAnimationFrame()
  https://gist.github.com/pixelhandler/1081922/d0b9fd3ca92d84947a6c834066da9c90d3d4c82b
*/
function loadImages(tabImagesNonLoad){
    var loadedImages = [];
    for(var i = 0; i<tabImagesNonLoad.length; i++){
      var img1 = new Image();
      // attendre pour que l'image soit load 
      img1.addEventListener('load', function(){
      });
      img1.src = tabImagesNonLoad[i];
      loadedImages.push(img1);
    }
    return loadedImages;
}

//remplirCanvas(1);