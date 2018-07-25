import { Component, OnInit } from '@angular/core';
import { Sondage, Stagiaire } from '../domains';
import { SondageService } from '../services/sondage.service';
import { ActivatedRoute } from '@angular/router';
import { StagiaireService } from '../services/stagiaire.service';

@Component({
  selector: 'app-liste-sondages',
  templateUrl: './liste-sondages.component.html',
  styleUrls: ['./liste-sondages.component.scss']
})
export class ListeSondagesComponent implements OnInit {

  listeSondages:Sondage[]=[]
  stagiaire:Stagiaire 


  constructor(private _listeSd:SondageService,private _st:StagiaireService,private _route: ActivatedRoute) 
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

  ngOnInit() {
  }

}
