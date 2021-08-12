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


function remplirCanvas(collisionOuPas){

  console.log("je suis rentre ici canvas");
  var canvas;
  var nourritureSurLeCanvas = [];

  // Pour savoir dans quel canvas le joueur est entrain de jouer
  if(collisionOuPas==1){
    canvas = document.getElementById("avecColli");
  }else{
    canvas = document.getElementById("sansColli");
  }
  var layout = canvas.getContext("2d"); 
  animation(layout,nourritureSurLeCanvas,0);




}

function animation(layout,nourritureSurLeCanvas, nbfois){
 // while(nbNourriture <10){ // pour pas avoir plus de 2 nourritures sur le canvas en meme temps
  
 

         var xDepart =  Math.floor(Math.random() *7) * 100; 
         var yDepart = Math.floor(Math.random() *6) * 100;
         var direction = 0; //Math.floor(Math.random() *8);
         var grosseur = (Math.floor(Math.random() *4) * 10) + 20; // grosseur entre 20 px et 50 px
         var vitesse =  (Math.floor(Math.random() *8)+1) * 1000;  // ici c'est un peu arbitraire
         var nourriture = Math.floor(Math.random() *7) ; // pour savoir quelle image afficher
         var ptsDeVie = Math.floor(Math.random() *9) + 1; 

         let maNourriture = new Nourriture(mesNourritures[nourriture],ptsDeVie,grosseur,grosseur,xDepart,yDepart,vitesse,direction,false);

         /*if(foodToRemove.length == 0){
           nourritureSurLeCanvas.push(maNourriture);
         }else{
           var whichFood = foodToRemove.pop();
           nourritureSurLeCanvas[whichFood] = maNourriture;
         }*/
         nourritureSurLeCanvas.push(maNourriture);
         nourritureSurLeCanvas.forEach(function(food){
            food.deplacementNourriture(layout);
           /*if(food.isOnCanvas == false){
             food.deplacementNourriture(layout);
           }*/
         });
     

    // nbNourriture++;
 nbfois++;
if(nbfois < 20){requestAnimationFrame(function() {animation(layout,nourritureSurLeCanvas,nbfois)});}

}

remplirCanvas(1);