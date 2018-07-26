import { Injectable } from '@angular/core';
import { Stagiaire } from '../domains';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class StagiaireService 
{

  constructor(private _http:HttpClient) 
  { 

  }

  listerStagiaires():Promise<Stagiaire[]>  
  {
    return this._http.get(`${URL_BACKEND}/api/stagiaires`)
    .toPromise()
    .then((data: any) => data.map(el => new Stagiaire(el.id,el.nom, el.prenom,el.email, el.photo_url)));
  }

  trouverStagiaireParId(id:number)
  {
    return this._http.get(`${URL_BACKEND}/api/stagiaires/${id}`)
    .toPromise()
    .then((el: any) => new Stagiaire(el.id,el.nom, el.prenom,el.email, el.photo_url));
  }

  modifierStagiaire(ngForm)
  {
    return this._http.put(`${URL_BACKEND}/api/stagiaires`,ngForm)
    .toPromise()
    .then((el: any) => new Stagiaire(el.id,el.nom, el.prenom,el.email, el.photo_url));
  }
}
