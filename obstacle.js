
import obstacleSansCollision from "./obstacleSansCollision.js";


// Relier le cadre avec obstacles.js
let canvas = document.getElementById("sansColli");

// Pour desiner en 2d
let ctx= canvas.getContext("2d");

const gameWidth=700;
const gameHeight=700;

let obstaclesSansCollision= new obstacleSansCollision(gameWidth, gameHeight);


var imageObstacle= [ 
  './images/obstacle1.png',
  './images/obstacle2.png',
  './images/obstacle3.png',
  './images/obstacle4.png',
  './images/obstacle5.png'
]

function imagObstacle(tabImagesNonLoad){
  var imageObstacle = [];
  for(var i = 0; i<tabImagesNonLoad.length; i++){
    var img1 = new Image();
    // attendre pour que l'image soit load 
    img1.addEventListener('load', function(){
    });
    img1.src = tabImagesNonLoad[i];
    imageObstacle.push(img1);
  }
  return imageObstacle;
}


function placeObstacleSansCollision(tabImages){
  var mesPositions=[];
  
  for (var i=0;i<tabImages.length;i++){
  var xPosition=200+(Math.floor(Math.random() * 4)*100);
  var yPosition=200+(Math.floor(Math.random() * 4)*100);
  var ptsDeVieEnleve= 1+(Math.floor(Math.random() * 10));
  
  if(i == 0){
  var newTab = [];
  newTab.push(xPosition);newTab.push(yPosition);
  mesPositions.push(newTab);
  }
  else{
    for(var j = 0; j< mesPositions.length ; j++){
    var newX = mesPositions[j][0]
    var newY = mesPositions[j][1];
    }
  }
  }
}



// var img1 = new Image();
//        // attendre pour que l'image soit load avant de le dessiner!!
//         img1.addEventListener('load', function(){
//           obstaclesSansCollision.insererImage1(img1,ctx);
//         });
       
        


// var img2 = new Image();

//         // attendre pour que l'image soit load avant de le dessiner!!
//         img2.addEventListener('load', function(){
//           obstaclesSansCollision.insererImage2(img2,ctx);
//         });
       

      
// var img3 = new Image();

//         // attendre pour que l'image soit load avant de le dessiner!!
//         img3.addEventListener('load', function(){
//           obstaclesSansCollision.insererImage3(img3,ctx);
//         });
       


// var img4 = new Image();

//         // attendre pour que l'image soit load avant de le dessiner!!
//         img4.addEventListener('load', function(){
//           obstaclesSansCollision.insererImage4(img4,ctx);
//         });
        

// var img5 = new Image();

//         // attendre pour que l'image soit load avant de le dessiner!!
//         img5.addEventListener('load', function(){
//           obstaclesSansCollision.insererImage5(img5,ctx);
//         });
       