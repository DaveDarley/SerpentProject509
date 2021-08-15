import Nourriture from "./nourriture.js";
import ObsColli from "./obstacleCadreAvecCollision.js"
import obsSansColli from "./obstacleCadreSansCollision.js"
import { startGame } from "./pausePlayRestart.js"

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

var Pause , Restart , Quit = false ;



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
  Fonction qui s'occupe de faire apparaitre et bouger les nourritures sur le canvas , 
  peut importe cadre avec collision ou sans collisions ; on a un nombre de 2 nourritures
  en tout temps sur le canvas , des qu'un quitte le canvas , un autre apparait a un 
  endroit sur le canvas de facon aleatoire 
*/

/*
  Cette fonction gere tout l'animation du jeu
*/

function animation(layout,nourritureSurLeCanvas,lesNourritures,obsSurLeCanvas,obsImageLoaded,colliOuPas,posObsCadreSansColli,obsImageSansColliLoaded,mesObs){

  layout.clearRect(0,0,700,700);

  if(Restart){
    location.reload(); // reload ma page html
    Restart = false;
  }

  if(Quit){
    // je dois cancel mon animation ici ??
    window.location.href='index.html';
  }





  // tout nourriture qui excede les limites du canvas est enleve de la liste de nourriture a dessiner
  if(nourritureSurLeCanvas.length != 0){
    nourritureSurLeCanvas = checkFoodOnCanvas(nourritureSurLeCanvas);
  }
  
  // Si nb de nourriture sur le canvas < 2 alors on ajoute un autre nourriture
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
  nourritureSurLeCanvas.forEach(function(food){
    food.deplacementNourriture(layout);
});

// Les obstacles se deplacent sur le canvas ssi on est dans le cadre avec collision
if(colliOuPas == 1){ 
    animationObstacleColli(layout,obsSurLeCanvas,obsImageLoaded);
  }else{
    mesObs.forEach(function(Obs){
    Obs.placerMonObstacle(layout);
    });
  }
  
 requestAnimationFrame(function() {animation(layout,nourritureSurLeCanvas,lesNourritures,obsSurLeCanvas,obsImageLoaded,colliOuPas,posObsCadreSansColli,obsImageSansColliLoaded,mesObs)});
}




/*
    Dans le cadre avec collision , cette fonction s'occupe de deplacer les different obstacles sur le canvas 
    Les obstacles sort des 4 murs du canvas , on a un maximum de 2 obstacles en tt temps sur le canvas ; des qu'un 
    obstacle quitte le canvas , un autre apparait automatiquement !!
*/
function animationObstacleColli(layout,obsSurLeCanvas,obsImageLoaded){

  if(obsSurLeCanvas.length != 0){
    // retirer un obstacle de notre liste d'obstacle s'il n'est plus sur le canvas
    obsSurLeCanvas = checkFoodOnCanvas(obsSurLeCanvas);
  }

  // Des qu'on a moins de 2 objets sur le canvas , on en cree un autre
  if(obsSurLeCanvas.length < 2){
    var whichDirection = Math.floor(Math.random() *4); // 4 murs d'ou peuvent sortir les obstacles
    var posX; var posY;
    switch(whichDirection){
      case 0:  // Mur Nord
        posX = (Math.floor(Math.random() *8) * 100); 
        posY = 0;
        break;
      case 1: // Mur Est
        posX = 700; 
        posY = (Math.floor(Math.random() *8) * 100);
        break;
      case 2: // Mur Sud
        posX = (Math.floor(Math.random() *8) * 100); 
        posY = 700;
        break;
      case 3: // Mur ouest
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

  obsSurLeCanvas.forEach(function(food){
    food.deplacementObs(layout);
  });
}


/*
Idee : Avec le cadre avec collision, les obstacles sont places sur le canvas
       des le debut du jeu, et change jamais de position, sauf si le user recom-
       mence la partie.
       Cette fonction renvoie un tableau d'obstacle qu'on dessinera sur le canvas a chaque animation
*/

function animationObstacleSansColli(tabPosObs,imgObs){
 
  var obsSansCollision = [];
  for(var i = 0; i<tabPosObs.length; i++){
      // G 5 images pour les obstacles, a chaque fois je veux dessiner un,je choisis aleatoirement parmis mon tableau d'images
      var whichObs = Math.floor(Math.random()*5);
      var grosseur = (Math.floor(Math.random() *7) * 10) + 20; // grosseur entre 20 px et 50 px
      var ptsDeVieEnleves = Math.floor(Math.random() *9) + 1; // pts qui sera enleve du serpent s'il rentre en collision avec l'obstacle
      let obs = new obsSansColli(imgObs[whichObs],grosseur,tabPosObs[i][0],tabPosObs[i][1],ptsDeVieEnleves);
      obsSansCollision.push(obs);
  }
  return obsSansCollision;
}
  

 






/*
Fonction qui enleve tout nourriture et/ou obstacle qui ne se trouve plus sur le canvas en 
enlevant du tableau cette nourriture et/ou obstacle
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



export function entreeUser(userEntry){
  switch(userEntry){
          case "pause":
              if(Pause){ // Si pause est deja en true c que notre jeu est deja en pause ; on veut resume
                Pause = false;
              }else{
                Pause = true; 
              }
              break;
          case "quit":
              Quit = true;
              break;
          case "restart":
              Restart = true;
              break;
  }
}




// Appel de fonction qui commence tout 
remplirCanvas(startGame());