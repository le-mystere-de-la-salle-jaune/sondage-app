export class Stagiaire
{
    constructor(private _nom:string, private _prenom:string,private _urlPhoto:string)
    {
   
    }

    get Nom():string
    {
        return this._nom
    }

    set Nom(nom:string)
    {
        this._nom=nom
    }

    get Prenom():string
    {
        return this._prenom
    }

    set Prenom(prenom:string)
    {
        this._prenom=prenom
    }

    get UrlPhoto():string
    {
        return this._urlPhoto
    }

    set UrlPhoto(urlPhoto:string)
    {
        this._urlPhoto=urlPhoto
    }
}
