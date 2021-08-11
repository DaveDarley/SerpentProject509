import Serpent from "./Serpent.js";
//import Nourriture from "./Nourriture.js";
//import Obstacle from "./Obstacle.js";
import Game from "./Game.js";

/*Canvas*/
const canvas = document.getElementById('canvasAvecCollision');
/* Contexte graphique*/
const ctx = canvas.getContext("2d");

let serpent = new Serpent(600,500,"carre");

let game = new Game(canvas,ctx, serpent);
game.gameStart();
