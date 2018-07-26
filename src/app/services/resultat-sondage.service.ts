import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { ResultatSondage } from '../domains';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class ResultatSondageService {

  constructor(private _http:HttpClient) { 
  }

  listerResultatSondageStagiaire(id:number):Promise<ResultatSondage[]>  
  {
    return this._http.get(`${URL_BACKEND}/api/resultatsondage/${id}`)
    .toPromise()
    .then((data: any) => data.map(el => new ResultatSondage(el.id,el.stagiaire,el.sondage,el.optionSondage,el.stagiaireClasse,el.sondageName)))
  }
}
