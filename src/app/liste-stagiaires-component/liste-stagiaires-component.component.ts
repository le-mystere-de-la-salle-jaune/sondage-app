import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../domains';
import { StagiaireService } from '../services/stagiaire.service';

@Component({
  selector: 'app-liste-stagiaires-component',
  templateUrl: './liste-stagiaires-component.component.html',
  styleUrls: ['./liste-stagiaires-component.component.scss']
})
export class ListeStagiairesComponentComponent implements OnInit {

  listeStagiaires:Stagiaire[]=[]

  constructor(private _listeSt:StagiaireService) 
  { 
    _listeSt.listerStagiaires().then((stagiaires:any) => {
      stagiaires.forEach(stagiaire => {
        this.listeStagiaires.push(stagiaire);
      });
    });
  }

  ngOnInit() {
  }

}
