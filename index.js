// Lien vers mes png : http://pngimg.com/images/nature/stone
// Lancer et arrêter un requestanimationFrame : https://stackoverflow.com/questions/10735922/how-to-stop-a-requestanimationframe-recursion-loop

import Game from "./game.js";
import EntreeUser from "./EntreeUser.js";
import Serpent from "./Serpent.js"

/* Toutes les nourritures à afficher sur le canvas */
var mesNourritures = [
  "./images/img0.png",
  "./images/img1.png",
  "./images/img2.png",
  "./images/img3.png",
  "./images/img4.png",
  "./images/img5.png",
  "./images/img6.png"
]

/* Les images d'obstacles à afficher sur le canvas prennant en compte les collisions avec le cadre */
var mesObstacles = [
  "./images/obsColli1.png",
  "./images/obsColli2.png",
  "./images/obsColli3.png",
  "./images/obsColli4.png"
]

/* Les images d'obstacles à afficher sur le canvas ne prennant pas en compte les collisions avec le cadre */
var imageObstacle= [ 
  "./images/obstacle1.png",
  "./images/obstacle2.png",
  "./images/obstacle3.png",
  "./images/obstacle4.png",
  "./images/obstacle5.png"
]

/** Image utilisée pour réprésenter chaque case du serpent */
var imgSerp = "./images/R.png";

var layout, canvas;

let serpent = new Serpent(700,700,"carre",layout);
let game = new Game(canvas,layout,serpent,700,700,mesObstacles,mesNourritures,imageObstacle,imgSerp);

/** Objet écouteur gérant les entrées de l'utilisateur */
new EntreeUser(serpent,game);

/** Position du serpent au début du jeu */ 
serpent.corps[0].PositionX = 0;
serpent.corps[0].PositionY = 0;

document.getElementById("ptsDeVie").innerHTML = serpent.pointDeVie;
document.getElementById("ptsGagnes").innerHTML = 0;

//Début de la partie
game.gameStart();

serpent.layout = game.layout;

