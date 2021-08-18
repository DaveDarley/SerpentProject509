import Nourriture from "./nourriture.js";
import ObsColli from "./obstacleCadreAvecCollision.js"
import obsSansColli from "./obstacleCadreSansCollision.js"
/*
    animation.js s'aoccupe de faire les animations du canvas
    que ce soit dans le cadre avec collision ou dans le cadre sans collision
*/



/*
  Fonction qui s'occupe de faire apparaitre et bouger les nourritures sur le canvas , 
  peut importe cadre avec collision ou sans collisions ; on a un nombre de 2 nourritures
  en tout temps sur le canvas , des qu'une nourriture quitte le canvas , une autre apparait a un 
  endroit sur le canvas de facon aleatoire 
*/

/*
  Cette fonction gere tout l'animation du jeu
*/



var Pause , Restart , Quit = false ;

export function animation(layout,nourritureSurLeCanvas,lesNourritures,obsSurLeCanvas,obsImageLoaded,colliOuPas,posObsCadreSansColli,obsImageSansColliLoaded,mesObs,monserpent,formeSerp){

    layout.clearRect(0,0,700,700);


  
    if(Restart){
      location.reload(); // reload ma page html
      Restart = false;
    }
  
    if(Quit){
      // je dois cancel mon animation ici ??
      window.location.href='index.html';
    }

   /*
    Si l'utilisateur clique sur pause , notre animation continue sauf
    qu'on redessine a chaque animation les objets a la meme position
   */

   if(!Pause){
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

        monserpent.dessiner(layout,formeSerp);

    }else{

        nourritureSurLeCanvas.forEach(function(food){
            layout.drawImage(food.image,food.posX,food.posY,food.getGrosseurNourriture(),food.getGrosseurNourriture())
        });
        // Les obstacles se deplacent sur le canvas ssi on est dans le cadre avec collision
        if(colliOuPas == 1){ 
            obsSurLeCanvas.forEach(function(food){
                layout.drawImage(food.image,food.posX,food.posY,food.grosseur,food.grosseur)
            });
        }else{
            mesObs.forEach(function(Obs){
                Obs.placerMonObstacle(layout);
            });
        }


    }
    
   requestAnimationFrame(function() {animation(layout,nourritureSurLeCanvas,lesNourritures,obsSurLeCanvas,obsImageLoaded,colliOuPas,posObsCadreSansColli,obsImageSansColliLoaded,mesObs,monserpent,formeSerp)});
}

/*
    Dans le cadre avec collision , cette fonction s'occupe de deplacer les differents obstacles sur le canvas 
    Les obstacles sort des 4 murs du canvas , on a un maximum de 2 obstacles en tt temps sur le canvas ; des qu'un 
    obstacle quitte le canvas , un autre apparait automatiquement !!
*/
export function animationObstacleColli(layout,obsSurLeCanvas,obsImageLoaded){

    if(obsSurLeCanvas.length != 0){
      // retirer un obstacle de notre liste d'obstacle s'il n'est plus sur le canvas
      obsSurLeCanvas = checkFoodOnCanvas(obsSurLeCanvas);
    }
  
    // Des qu'on a moins de 2 objets sur le canvas , on en cree un autre
    if(obsSurLeCanvas.length < 2){
      var whichDirection = Math.floor(Math.random() *4); // 4 murs d'ou peuvent sortir les obstacles
      var posX; var posY;
      var grosseur = (Math.floor(Math.random() *4) * 10) + 20; // grosseur entre 20 px et 50 px
      var ptsDeVieEnleves = Math.floor(Math.random() *9) + 1; 
      var imgObs = Math.floor(Math.random() *4) ; // pour savoir quelle image d'obstacle afficher 

      switch(whichDirection){
        case 0:  // Mur Nord
          document.getElementById("obsFromWhere").innerHTML = "NORD";
          posX = (Math.floor(Math.random() *8) * 100) ; 
          posY = 0 ;
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
          posX = 0 ; 
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



/*
Idee : Avec le cadre sans collision, les obstacles sont places sur le canvas
       des le debut du jeu, et change jamais de position, sauf si le user recom-
       mence la partie.
       Cette fonction renvoie un tableau d'obstacle qu'on dessinera sur le canvas a chaque animation
*/

export function animationObstacleSansColli(tabPosObs,imgObs){

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
export function checkFoodOnCanvas(tabFood){
    for(var i = 0; i<tabFood.length; i++){
       if(tabFood[i].isOnCanvas == false){
         tabFood.splice(i,1);
       }
    }
    return tabFood;
}




export function entreeUser(userEntry){
    switch(userEntry){
            case "pause":
                if(Pause){ // Si pause est deja en true c que notre jeu est deja en pause ; on veut resume
                  document.getElementById("pause").innerHTML = "1) Pause";
                  Pause = false;
                }else{
                  document.getElementById("pause").innerHTML = "1) resume";
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
