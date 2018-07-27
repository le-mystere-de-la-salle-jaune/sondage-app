import { Component, OnInit } from '@angular/core';
import { Sondage, Stagiaire } from '../domains';
import { SondageService } from '../services/sondage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StagiaireService } from '../services/stagiaire.service';
import {PipeTransform, Pipe} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste-sondages',
  templateUrl: './liste-sondages.component.html',
  styleUrls: ['./liste-sondages.component.scss']
})
export class ListeSondagesComponent implements OnInit {

  listeSondages:Sondage[]=[];
  stagiaire:Stagiaire = new Stagiaire(undefined,undefined,undefined,undefined,undefined);
  saisi:string;


  constructor(private _listeSd:SondageService,private _st:StagiaireService,private _route: ActivatedRoute,private router: Router,private _http:HttpClient) 
  {
    let id:number = Number.parseInt(_route.snapshot.paramMap.get("id_St"))
    _listeSd.listerSondages(id).then((sondages:Sondage[]) => {
      sondages.forEach(sondage => {
        this.listeSondages.push(sondage);
      });
    });
    _st.trouverStagiaireParId(id).then((st:Stagiaire)=> {
      this.stagiaire=st;
    })
  }

  quandOnClique(id:number)
  {
    this.router.navigate([`/${this.stagiaire.id}/sondages/${id}`])
  }

  ngOnInit() {
  }

  

}
