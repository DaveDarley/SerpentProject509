
import EntreeUser from "./EntreeUser.js";
import obsSansColli from "./obstacleCadreSansCollision.js";
import { animationObstacleSansColli , animation} from "./animation.js";
import { colliSerpFood , colliSerpMur , colliSerp, colliSerpObs, colliSerpMovingObs} from "./GestionCollision.js";

export default class Game
{
    constructor(canvas, layout, serpent, gameWidth,gameHeight,  imgObs ,imgFood, imgObsSansColli, imgSerp )
    {
        this.canvas = canvas;
        this.layout = layout;
        this.serpent = serpent;
        this.gameWidth = gameWidth;
        this.gameHeight =gameHeight;
        this.imgObs = this.gameInitialise(imgObs,0);
        this.imgFood = this.gameInitialise(imgFood,0);
        this.imgObsSansColli = this.gameInitialise(imgObsSansColli,0);
        this.imgSerp = this.gameInitialise(imgSerp,1);
        this.state = "";
    }
    

        /**Initialiser le jeu en telechargeant les images */
        /*
        Function pour load tous les images de nourriture avant d'appeler requestAnimationFrame()
        https://gist.github.com/pixelhandler/1081922/d0b9fd3ca92d84947a6c834066da9c90d3d4c82b
        */
        gameInitialise(tabImagesAload,initSerpEtClavier)
    {
        if(initSerpEtClavier == 1){
            var img1 = new Image();
            img1.addEventListener('load', function(){
            });
            img1.src = tabImagesAload;
            return img1;
        }else{
            for(var i = 0; i<tabImagesAload.length; i++){
                var img1 = new Image();
                img1.addEventListener('load', function(){
                });
                img1.src = tabImagesAload[i];
                tabImagesAload[i] = img1;
            }
            return tabImagesAload;
        }
    }

    gameStart(){

        var colliOuPas;
        var nourritureSurLeCanvas = [];
        var obsSurLeCanvas = [];
        var posObsCadreSansColli;
        var mesObs;
        this.state = "Running";

        if(document.getElementById('sansColli')){
            this.canvas = document.getElementById("sansColli");
            this.layout = this.canvas.getContext("2d"); 
            colliOuPas = 2;
        }else{
          this.canvas = document.getElementById("avecColli");
          this.layout = this.canvas.getContext("2d"); 
          colliOuPas = 1;
        }
      
        // Comme c'est une classe , je suis oblige de creer une instance
        // mais elle n'est pas vraiment necessaire encore!!
        let obs = new obsSansColli(0,0,0,0,0);
    
        // la g les positions ou je peux placer mes differents obstacle
        posObsCadreSansColli = obs.placeObstacleSansCollision(this.imgObsSansColli,[],0);
        mesObs = animationObstacleSansColli(posObsCadreSansColli,this.imgObsSansColli);

        this.serpent.whichCanvas = colliOuPas; // a mettre commentaire
    
        this.gameLoop(this.layout,nourritureSurLeCanvas,this.imgFood,obsSurLeCanvas,this.imgObs,colliOuPas,posObsCadreSansColli,this.imgObsSansColli,mesObs,this.serpent,this.imgSerp,0);
    }

    
    gameLoop(layout,nourritureSurLeCanvas,lesNourritures,obsSurLeCanvas,obsImageLoaded,colliOuPas,posObsCadreSansColli,obsImageSansColliLoaded,mesObs,monserpent,formeSerp,timeStamp){
       
        layout.clearRect(0,0,700,700);
        if(this.state == "pause"){
           
            nourritureSurLeCanvas.forEach(function(food){
                layout.drawImage(food.image,food.posX,food.posY,food.getGrosseurNourriture(),food.getGrosseurNourriture())
            });
            // Les obstacles se deplacent sur le canvas ssi on est dans le cadre avec collision
            if(colliOuPas == 1){ 
                obsSurLeCanvas.forEach(function(obs){
                    layout.drawImage(obs.image,obs.posX,obs.posY,obs.grosseur,obs.grosseur);
                });   
            }else{
                mesObs.forEach(function(Obs){
                    Obs.placerMonObstacle(layout);
                });
            }
            this.serpent.dessiner(layout,this.imgSerp);

        }else{
            // Collision entre le serpent et la nourriture
            nourritureSurLeCanvas = colliSerpFood(nourritureSurLeCanvas,monserpent);
            // Gestion collision entre le serpent et les differents types d'obstacles
            if(colliOuPas == 2){ // on est dans le cadre sans collisions
                colliSerpObs(monserpent,mesObs);
            }else{
                colliSerpMovingObs(monserpent,obsSurLeCanvas);
            }

            if(monserpent.pointDeVie <= 0){this.gameQuit();}

            animation(layout,nourritureSurLeCanvas,lesNourritures,obsSurLeCanvas,obsImageLoaded,colliOuPas,posObsCadreSansColli,obsImageSansColliLoaded,mesObs,monserpent,formeSerp,timeStamp);
            
            // collision entre serpent et lui meme ou qd pts de vie serpent <= 0, alors on quitte le jeu
            if(colliSerp(monserpent)){
                this.gameQuit();
            }

        }
        // source: https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
        timeStamp = Date.now();
        
        // qd serpent rentre en contact avec un mur dans le "cadre avec collision", ici on ici le joueur a perdu
        if( (colliOuPas == 1 &&  colliSerpMur(monserpent)) ){ 
           // alert('Vous avez perdu , Dommage!!');
            this.gameQuit();
        }else{
            window.requestAnimationFrame(()=>this.gameLoop(layout,nourritureSurLeCanvas,lesNourritures,obsSurLeCanvas,obsImageLoaded,colliOuPas,posObsCadreSansColli,obsImageSansColliLoaded,mesObs,monserpent,formeSerp,timeStamp) ); 
        }  
    }




    gamePause(){
        if(this.state == "pause"){
          this.state = "Running";
          document.getElementById("pause").innerHTML = "1) Pause";
        }else{
            this.state = "pause";
            document.getElementById("pause").innerHTML = "1) Resume";
        }
    }

    gameRestart(){
        location.reload(); 
        this.state = "Running";
    }

    gameQuit(){
        window.location.href='index.html';
    }


}

