import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Sondage } from '../domains';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class SondageService {

  private _idStagiaire:number

  constructor(private _http:HttpClient) { }

  listerSondages():Promise<Sondage[]>  
  {
    return this._http.get(`${URL_BACKEND}/api/sondages?idStagiaire=${this._idStagiaire}`)
    .toPromise()
    .then((data: any) => data.map(el => new Sondage(el.titre)));
  }

  set IdStagiaire(id:number)
  {
    this._idStagiaire=id
  }
}
