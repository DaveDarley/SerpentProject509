/** Une forme */
export default class Forme
{
    /** Création d'une forme */
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

    /** Changer la position de la forme */
    changerPosition(positionX,positionY)
    {
        this.positionX = positionX;
        this.positionY = positionY;
    }

    /** Renvoyer la position de cette forme */
    renvoiePosition()
    {
        return [this.positionX,this.positionY];
    }

}