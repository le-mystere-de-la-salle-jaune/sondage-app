import { Injectable, Input } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Sondage, Stagiaire, ResultatSondage } from '../domains';
import { ActivatedRoute } from '@angular/router';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class SondageService {


  constructor(private _http:HttpClient) {
  
  }

  listerSondages(id:number):Promise<Sondage[]>  
  {
    return this._http.get(`${URL_BACKEND}/api/sondages?idStagiaire=${id}`)
    .toPromise()
    .then((data: any) => data.map(el => new Sondage(el.id,el.titre,el.classe,null)));
  }

  listerSondagesById(id:number):Promise<Sondage>  
  {
    return  this._http.get(`${URL_BACKEND}/api/sondages/lister/${id}`)
    .toPromise()
    .then((el: any) => new Sondage(el.id,el.titre,el.classe,el.options));
  }

  repondreAUnSondage(idReponse:number,id_St:number,id_Sd:number)
  {
    return this._http.post(`${URL_BACKEND}/api/resultats`,{ :idReponse, :id_St, :id_Sd})
    .toPromise()
    .then((el: any) => new ResultatSondage(el.id,el.stagiaire,el.sondage,el.optionSondage,el.stagiaireClasse,el.sondageName));
  }
  
}
