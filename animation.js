import Nourriture from "./nourriture.js";
import ObsColli from "./obstacleCadreAvecCollision.js"
import obsSansColli from "./obstacleCadreSansCollision.js"
/*
    animation.js contient les fonctions gérant les animations du canvas
    que ce soit dans le cadre avec collision ou dans le cadre sans collision
*/

var last = 0; // à commenter

/*
  Fonction qui s'occupe de faire apparaitre et bouger les nourritures sur le canvas , 
  peut importe cadre avec collision ou sans collisions ; il y a au maximun 2 nourritures
  en tout temps sur le canvas. Dès qu'une nourriture quitte le canvas, une autre apparait à un 
  endroit sur le canvas de facon aléatoire 
*/

/*Cette fonction gère toute l'animation du jeu*/
export function animation(layout,nourritureSurLeCanvas,lesNourritures,obsSurLeCanvas,obsImageLoaded,colliOuPas,posObsCadreSansColli,obsImageSansColliLoaded,mesObs,monserpent,formeSerp,timeStamp){

  // layout.clearRect(0,0,700,700);
  // tout nourriture qui excède les limites du canvas est enlevé de la liste de nourriture à dessiner
  if(nourritureSurLeCanvas.length != 0){
  nourritureSurLeCanvas = checkFoodOnCanvas(nourritureSurLeCanvas);
  }
  
  // Si le nombre de nourriture sur le canvas < 2, alors on ajoute une autre nourriture
  if(nourritureSurLeCanvas.length < 2){
  var xDepart =  (Math.floor(Math.random() *5) * 100)+150; 
  var yDepart = (Math.floor(Math.random() *5) * 100)+150;
  var direction = Math.floor(Math.random() *8);
  var grosseur = (Math.floor(Math.random() *4) * 10) + 20; // grosseur entre 20 px et 50 px

  // doit modifier parce que je l'utilise pas encore lors du redessinement du canvas
  var vitesse =  (Math.floor(Math.random() *8)+1) * 1000;  // ici c'est un peu arbitraire

  var nourriture = Math.floor(Math.random() *7) ; // pour savoir quelle image afficher
  var ptsDeVie = Math.floor(Math.random() *9) + 1; 

  let maNourriture = new Nourriture(lesNourritures[nourriture],ptsDeVie,grosseur,xDepart,yDepart,vitesse,direction,false);
  nourritureSurLeCanvas.push(maNourriture);
  }

  nourritureSurLeCanvas.forEach(function(food){
    food.deplacementNourriture(layout);
  });

  // Les obstacles se déplacent sur le canvas ssi on est dans le cadre avec collision
  if(colliOuPas == 1){ 
    animationObstacleColli(layout,obsSurLeCanvas,obsImageLoaded);
  }else{
    mesObs.forEach(function(Obs){
      Obs.placerMonObstacle(layout);
    });
  }


  let timeInSecond = timeStamp / 1000;

  if (timeInSecond - last >= 0.1) {
    last = timeInSecond;
    monserpent.bougerSansUser(layout,formeSerp);
  }
  monserpent.dessiner(layout,formeSerp);

}

/*Dans le cadre avec collision, cette fonction s'occupe de déplacer les différents obstacles sur le
  canvas. Les obstacles sort des 4 murs du canvas, on a un maximum de 2 obstacles en même temps sur 
  le canvas; dès qu'un obstacle quitte le canvas, un autre apparait automatiquement !!
*/
export function animationObstacleColli(layout,obsSurLeCanvas,obsImageLoaded){

  if(obsSurLeCanvas.length != 0){
    // Retirer un obstacle de notre liste d'obstacle s'il n'est plus sur le canvas
    obsSurLeCanvas = checkFoodOnCanvas(obsSurLeCanvas);
  }

  // Dès qu'on a moins de 5 objets sur le canvas , on en crée un autre
  if(obsSurLeCanvas.length < 5){  
    var whichDirection = Math.floor(Math.random() *4); // 4 murs d'où peuvent sortir les obstacles
    var posX; var posY;
    var grosseur = (Math.floor(Math.random() *4) * 10) + 20; // Grosseur entre 20 px et 50 px
    var ptsDeVieEnleves = Math.floor(Math.random() *9) + 1; 
    var imgObs = Math.floor(Math.random() *4) ; // Pour savoir quelle image d'obstacle afficher 

    switch(whichDirection){
      case 0:  // Mur Nord
        document.getElementById("obsFromWhere").innerHTML = "NORD";
        posX = (Math.floor(Math.random() *8) * 100) ; 
        posY = 0 - grosseur;  // pour avoir une entrée coulante de l'image sur le canvas 
        break;
      case 1: // Mur Est
        document.getElementById("obsFromWhere").innerHTML = "EST";
        posX = 700; 
        posY = (Math.floor(Math.random() *8) * 100);
        break;
      case 2: // Mur Sud
        document.getElementById("obsFromWhere").innerHTML = "SUD";
        posX = (Math.floor(Math.random() *8) * 100); 
        posY = 700;
        break;
      case 3: // Mur ouest
        document.getElementById("obsFromWhere").innerHTML = "OUEST";
        posX = 0 - grosseur; 
        posY = (Math.floor(Math.random() *8) * 100) ;
        break;
    }

    let monObstacle = new ObsColli(obsImageLoaded[imgObs],ptsDeVieEnleves,grosseur,posX,posY,whichDirection,false,posX,posY);
    obsSurLeCanvas.push(monObstacle);
  }
  
  obsSurLeCanvas.forEach(function(food){
    food.deplacementObs(layout);
  });
}

/*Idée:
  Avec le cadre sans collision, les obstacles sont placés sur le canvas dès le debut du jeu, et change
  jamais de position, sauf si le joueur recommence la partie.
  Cette fonction renvoie un tableau d'obstacle qu'on dessinera sur le canvas à chaque animation
*/
export function animationObstacleSansColli(tabPosObs,imgObs){

  var obsSansCollision = [];
  for(var i = 0; i<tabPosObs.length; i++){
    // J'ai 5 images pour les obstacles. À chaque fois que je veux dessiner un,je choisis aléatoirement parmis mon tableau d'images
    var whichObs = Math.floor(Math.random()*5);
    var grosseur = (Math.floor(Math.random() *7) * 10) + 20; // Grosseur entre 20 px et 50 px
    var ptsDeVieEnleves = Math.floor(Math.random() *9) + 1; // Points de vie du serpent qui sera enlevé s'il rentre en collision avec l'obstacle
    let obs = new obsSansColli(imgObs[whichObs],grosseur,tabPosObs[i][0],tabPosObs[i][1],ptsDeVieEnleves);
    obsSansCollision.push(obs);
  }
  return obsSansCollision;
}

/*
Fonction qui enlève tous les nourritures et/ou obstacles qui ne se trouve plus sur le canvas en 
enlevant du tableau ces nourriture et/ou ces obstacles
*/
export function checkFoodOnCanvas(tabFood){
  for(var i = 0; i<tabFood.length; i++){
    if(tabFood[i].isOnCanvas == false){
      tabFood.splice(i,1);
    }
  }
  return tabFood;
}



