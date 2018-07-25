export class Stagiaire
{
    constructor(private _id:number,private _nom:string, private _prenom:string,private _email:string, private _urlPhoto:string)
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

    get Id():number
    {
        return this._id
    }

    set Id(id:number)
    {
        this._id=id
    }

    get Email():string
    {
        return this._email
    }

    set Email(email:string)
    {
        this._email=email
    }
}


export class Sondage
{
    constructor(private _id:number,private _titre:string)
    {

    }

    get Id():number
    {
        return this._id
    }

    set Id(id:number)
    {
        this._id=id
    }


    get Titre():string
    {
        return this._titre
    }

    set Titre(titre:string)
    {
        this._titre=titre
    }
}



