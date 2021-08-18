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

}