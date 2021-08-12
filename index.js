import Serpent from "./Serpent.js";
//import Nourriture from "./Nourriture.js";
//import Obstacle from "./Obstacle.js";
import Game from "./Game.js";

/*Canvas*/
const canvas = document.getElementById('canvasAvecCollision');
/* Contexte graphique*/
const ctx = canvas.getContext("2d");

let serpent = new Serpent(700,700,"carre",ctx);

let game = new Game(canvas,ctx, serpent,700,700);
//game.gameStart();
game.gameloop(12);
