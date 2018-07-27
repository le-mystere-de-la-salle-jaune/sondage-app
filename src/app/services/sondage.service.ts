import { Injectable, Input } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Sondage, Stagiaire, OptionSondage } from '../domains';
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
    .then((data: any) => data.map(el => new Sondage(el.id,el.titre,null)));
  }

  listerSondagesbyid(id:number):Promise<Sondage>  
  {
    return this._http.get(`${URL_BACKEND}/api/sondages/lister/${id}`)
    .toPromise()
    .then((el:any) => new Sondage(el.id,el.titre,el.options.map(el2 => new OptionSondage(el2.id,el2.libelle,el2.description))));
  }

}
