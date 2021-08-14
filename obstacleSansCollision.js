// // Relier le cadre avec obstacles.js
// let canvas = document.getElementById("avecColli");

// // Pour desiner en 2d
// let ctx= canvas.getContext("2d");

// ctx.clearRect(0, 0, 700, 700);


export default class obstacleSansCollision {

    constructor(gameWidth, gameHeight) {
        
        this.width= 20;
        
        this.height= 100;

        this.position= {

         x:40,

         y:95 
        };

    }


//     insererImage1(img1,ctx){
    

//     ctx.drawImage(img1, 40, 95 ,this.width, this.height);
    
//     }

//     insererImage2(img2,ctx){
    

//         ctx.drawImage(img2, 50, 95 ,this.width+80, this.height-80);
        
//         }

   
//     insererImage3(img3,ctx){
    

//             ctx.drawImage(img3, 200, 500, 50, 50);
            
//             }     

//     insererImage4(img4,ctx){
    

//                 ctx.drawImage(img4, 500, 40, 50, 50);
                
//                 }     
        
// insererImage5(img5,ctx){
    

//                     ctx.drawImage(img5, 600, 200, 50, 50);
                    
//                     }  

}
