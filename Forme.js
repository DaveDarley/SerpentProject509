export default class Forme
{
    constructor(figureGeo, longueurCote)
    {
        this.forme = figureGeo;
        this.longueurCote = longueurCote;
        this.positionX = 0;
        this.positionY = 0;
        this.vitesseX = 0;
        this.vitesseY = 0;
        this.direction = 39;
    }

    changerPosition(positionX,positionY)
    {
        this.positionX = positionX;
        this.positionY = positionY;
    }

    renvoiePosition()
    {
        return [this.positionX,this.positionY];
    }

    //Focntion gerant les collisions
    collision(serpent/*, tabObst*/)
    {
        if (serpent.corps.length > 1){
            if ((serpent.teteSerpent.positionX <= this.positionX <= serpent.teteSerpent.positionX) && serpent.teteSerpent.positionY == this.positionY)
            {
                console.log("Collision");
                return true;
            }
        }

        // if ((serpent.teteSerpent.positionX > this.positionX + this.longueurCote )||
        //          (this.positionX > serpent.teteSerpent.positionX + this.longueurCote)||
        //          (serpent.teteSerpent.positionY > this.positionY + this.longueurCote)||
        //          (this.positionY > serpent.teteSerpent.positionY + this.longueurCote))
        //     {
        //         console.log(" Pas de Collision");
        //         return false;
        //     }
        //     else
        //     {
        //         console.log(" Collision ");
        //         return true;
        //     }

    }

}