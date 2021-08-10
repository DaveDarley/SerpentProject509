import * as MyFn from './index.js'

var mesImages = {
    img0 : "./images/img"+ 0 + ".png",
    img1 : "./images/img"+ 1 + ".png",
    img2 : "./images/img"+ 2 + ".png",
    img3 : "./images/img"+ 3 + ".png",
    img4 : "./images/img"+ 4 + ".png",
    img5 : "./images/img"+ 5 + ".png",
    img6 : "./images/img"+ 6 + ".png"
  };

function deplacementNourriture(layout){

  console.log("je suis bien entre ici");

  var quelleImage = "img"+Math.floor(Math.random()*7); // quelle nourriture se deplace sur le canvas
  var quelleDirection = Math.floor(Math.random()*8); // quelle direction doit se deplacer la nourriture
  let position = 0;
  let id = null;
  clearInterval(id);
  id = setInterval(frame,10000); // appelle la fonction frame chaque 1 seconde

  function frame(){
    if (position == 700){
      clearInterval(id); // arreter setInterval ; ca n'appelle plus frame
    }else{
      position++;

      switch(quelleDirection){
        case 0:
          var posX = pos;
          var posY = pos;
          MyFn.loadImages(mesImages, function(images){
            layout.drawImage(images.quelleImage,posX,posY,40,40);
        })
        break;

        case 1:
          var posX = pos;
          var posY = pos;
          MyFn.loadImages(mesImages, function(images){
            layout.drawImage(images.quelleImage,posX,posY,40,40);
        })
        break;

        case 2:
          var posX = pos;
          var posY = pos;
          MyFn.loadImages(mesImages, function(images){
            layout.drawImage(images.quelleImage,posX,posY,40,40);
        })
        break;

        case 3:
          var posX = pos;
          var posY = pos;
          MyFn.loadImages(mesImages, function(images){
            layout.drawImage(images.quelleImage,posX,posY,40,40);
        })
        break;

        case 4:
          var posX = pos;
          var posY = pos;
          MyFn.loadImages(mesImages, function(images){
            layout.drawImage(images.quelleImage,posX,posY,40,40);
        })
        break;

        case 5:
          var posX = pos;
          var posY = pos;
          MyFn.loadImages(mesImages, function(images){
            layout.drawImage(images.quelleImage,posX,posY,40,40);
        })
        break;

        case 6:
          var posX = pos;
          var posY = pos;
          MyFn.loadImages(mesImages, function(images){
            layout.drawImage(images.quelleImage,posX,posY,40,40);
        })
        break;

        case 7:
          var posX = pos;
          var posY = pos;
          MyFn.loadImages(mesImages, function(images){
            layout.drawImage(images.quelleImage,posX,posY,40,40);
        })
        break;
      }


    }
  }

}
