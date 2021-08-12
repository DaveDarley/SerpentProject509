//Une forme
export default class Forme
{
    constructor(figureGeo, longueurCote)
    {
        this.forme = figureGeo;
        this.longueurCote = longueurCote;
        this.positionX = 0;
        this.positionY = 0;
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
