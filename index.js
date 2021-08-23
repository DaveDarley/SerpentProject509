// Lien vers mes png : http://pngimg.com/images/nature/stone
// play et stop un requestanimationFrame : https://stackoverflow.com/questions/10735922/how-to-stop-a-requestanimationframe-recursion-loop

import Game from "./game.js";
import EntreeUser from "./EntreeUser.js";
import Serpent from "./Serpent.js"




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
  "./images/obsColli4.png"
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

//Image utilise pour representer chaque case du serpent
var imgSerp = "./images/R.png"; 
var layout, canvas;


let serpent = new Serpent(700,700,"carre",layout);
let game = new Game(canvas,layout,serpent,700,700,mesObstacles,mesNourritures,imageObstacle,imgSerp);

// Listenner pour la gestion des entrees de l'utilisateur
new EntreeUser(serpent,game);

// Ou on place le serpent au debut du jeu
serpent.corps[0].PositionX = 0;
serpent.corps[0].PositionY = 0;

//Debut de la partie
document.getElementById("ptsDeVie").innerHTML = serpent.pointDeVie;
document.getElementById("ptsGagnes").innerHTML = 0;

game.gameStart();
serpent.layout = game.layout

