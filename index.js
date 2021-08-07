var images = [];
var mesImages = {
    img0 : "./images/img"+ 0 + ".png",
    img1 : "./images/img"+ 1 + ".png",
    img2 : "./images/img"+ 2 + ".png",
    img3 : "./images/img"+ 3 + ".png",
    img4 : "./images/img"+ 4 + ".png",
    img5 : "./images/img"+ 5 + ".png",
    img6 : "./images/img"+ 6 + ".png"
  };



// sources aura la liste d'Images
function loadImages(sources, callback){
  var images = {};
  var loadedImages = 0;
  var numImages = 0;

  for(var src in sources){ // pr savoir le nb d'images qu'on a passe a cette fonction
    numImages++;
  }
  for(var src in sources){
    images[src] = new Image();
    images[src].onload = function(){

      if (++loadedImages >= numImages){
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}

function remplirCanvas(collisionOuPas){
  var canvas;

  if(collisionOuPas==1){
    canvas = document.getElementById("avecColli");
  }else{
    canvas = document.getElementById("sansColli");
  }
  var layout = canvas.getContext("2d");

  loadImages(mesImages, function(images){
    layout.drawImage(images.img0,0,0,40,40);
    layout.drawImage(images.img1,100,200,40,40);
    layout.drawImage(images.img2,400,200,40,40);
    layout.drawImage(images.img3,50,100,40,40);
    layout.drawImage(images.img4,300,200,40,40);
    layout.drawImage(images.img5,600,600,40,40);
    layout.drawImage(images.img6,700,700,40,40);

})

}
