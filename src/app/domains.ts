export class Stagiaire
{
    constructor(public id:number,public nom:string,public prenom:string,public email:string,public photo_url:string)
    {
   
    }

}


export class Sondage
{
    constructor(public id:number,public titre:string,public optionSondage:OptionSondage[])
    {

    }
}

export class ResultatSondage{
    constructor(public id:number,public stagiaire:number,public sondage:number,public optionSondage:number,public stagiaireClasse:number,public sondageName:string){

    }
}

export class OptionSondage
{
    constructor(public id:number,public libelle:string,public description:string)
    {

    }
}
