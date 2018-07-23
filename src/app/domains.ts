export class Stagiaire
{
    constructor(private _nom:string, private _prenom:string,private _urlPhoto:string)
    {
   
    }

    getNom():string
    {
        return this._nom
    }

    setNom(nom:string)
    {
        this._nom=nom
    }

    getPrenom():string
    {
        return this._prenom
    }

    setPrenom(prenom:string)
    {
        this._prenom=prenom
    }

    getUrlPhoto():string
    {
        return this._urlPhoto
    }

    setUrlPhoto(urlPhoto:string)
    {
        this._urlPhoto=urlPhoto
    }
}
