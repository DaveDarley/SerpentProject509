import Nourriture from "./nourriture.js";
import ObsColli from "./obstacleCadreAvecCollision.js"
import obsSansColli from "./obstacleCadreSansCollision.js"
import { startGame } from "./pausePlayRestart.js"

// check si on peut mettre import * .......
import { animation } from "./animation.js"
import { animationObstacleColli } from "./animation.js"
import { animationObstacleSansColli } from "./animation.js"
import { checkFoodOnCanvas } from "./animation.js"


/*
Les nourritures a afficher soit dans le cadre avec collision ou sans collision
*/
var mesNourritures = [
  "./images/img0.png",
  "./images/img1.png",
  "./images/img2.png",
  "./images/img3.png",
  "./images/img4.png",
  "./images/img5.png",
  "./images/img6.png"
]

/*
Ces images sont utilises pour afficher les obstacles du cadre avec collision
*/
var mesObstacles = [
  "./images/obsColli1.png",
  "./images/obsColli2.png",
  "./images/obsColli3.png",
  "./images/obsColli4.jpeg"
]

/*
Ces images sont utilises pour afficher les obstacles du cadre sans collision
*/
var imageObstacle= [ 
  "./images/obstacle1.png",
  "./images/obstacle2.png",
  "./images/obstacle3.png",
  "./images/obstacle4.png",
  "./images/obstacle5.png"
]



/*
L'entree du jeu
*/
function remplirCanvas(collisionOuPas){

  
  var canvas;
  var nourritureSurLeCanvas = [];
  var obsSurLeCanvas = [];
  var colliOuPas;
  var layout;
  var obsImageLoaded;
  var obsImageSansColliLoaded;
  var posObsCadreSansColli;
  var mesObs;

  // Pour savoir dans quel canvas le joueur est entrain de jouer
  if(collisionOuPas == 1){
    canvas = document.getElementById("avecColli");
    layout = canvas.getContext("2d"); 
    colliOuPas = 1;
    // Dans le cas du cadre avec collision , je load les images d'obstacles que j'aurai a utiliser
    obsImageLoaded = loadImages(mesObstacles);

  }else{
    canvas = document.getElementById("sansColli");
    layout = canvas.getContext("2d"); 

    // Je load les images que j'aurai a utiliser pour les obstacles pour le cadre sans collision
    obsImageSansColliLoaded = loadImages(imageObstacle);

    // un peu bete ici , mais la facon que je fais ma recursion dans placeObstacle...
    // fais en sorte que le tableau d'images loaded passe en parametre ressort vide
    var imgLoaded = loadImages(imageObstacle);

     // Comme c'est une classe , je suis oblige de creer une instance
    // mais elle n'est pas vraiment necessaire encore!!
    let obs = new obsSansColli(0,0,0,0,0);

    // la g les positions ou je peux placer mes differents obstacle
    posObsCadreSansColli = obs.placeObstacleSansCollision(imgLoaded,[]);
    mesObs = animationObstacleSansColli(posObsCadreSansColli,obsImageSansColliLoaded);
    
    console.log("Mon tableau de Position:"+posObsCadreSansColli);

    colliOuPas = 2;
  }
  // Je load les images de nourritures avant de les dessiner (tant qu'avec collision ou sans collision)!!
  var foodImageLoaded = loadImages(mesNourritures);

  

  animation(layout,nourritureSurLeCanvas,foodImageLoaded,obsSurLeCanvas,obsImageLoaded,colliOuPas,posObsCadreSansColli,obsImageSansColliLoaded,mesObs);
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




// Appel de fonction qui commence tout 
remplirCanvas(startGame());