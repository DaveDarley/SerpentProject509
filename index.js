import Serpent from "./Serpent.js";
//import Nourriture from "./Nourriture.js";
//import Obstacle from "./Obstacle.js";
import Game from "./Game.js";

/*Canvas*/
const canvas = document.getElementById('canvasAvecCollision');

/* Contexte graphique*/
const ctx = canvas.getContext("2d");

/**Le serpent */
let serpent = new Serpent(700,700,"carre",ctx);

/**Creation de la partie  */
let game = new Game(canvas,ctx, serpent,700,700);

//game.gameStart();
var image = game.gameInitialise();

game.gameStart(image);