// si je veux pouvoir utiliser n'importe quelle fonction ici dans un autre fichier js
// je dois export cette fonction

// Source: https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file

import { entreeUser } from './animation.js'

export function addEvent(){
    // Trop repetitif faut que je trouve un autre moyen de faire ca !!

    document.getElementById('pause').addEventListener('click',function(){
        entreeUser("pause");
    });
    document.getElementById('quit').addEventListener('click',function(){
        entreeUser("quit");
    });
    document.getElementById('restart').addEventListener('click',function(){
        entreeUser("restart");
    });
}


// Pour savoir quelle page a ete load 
// sans Collision ou avec Collision
export function startGame(){
    addEvent(); // des le debut du jeu , je mets des onclick listener sur les bouttons pause, quit,restart
    var whichCanvas ;
    if(document.getElementById('sansColli')){
        whichCanvas = 2;
    }else{
        whichCanvas = 1
    }
    return whichCanvas;
}