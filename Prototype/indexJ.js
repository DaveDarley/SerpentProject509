try {
    var canvas = document.getElementById("canvasId");
    var context = canvas.getContext("2d");
} catch (error) {
    console.log("ca ne marche pas");
}

function draw(){
    context.fillStyle = 'red';
    context.fillRect(150,80,70,70);
}
draw();
