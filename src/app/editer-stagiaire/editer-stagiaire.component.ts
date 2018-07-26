import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../domains';
import { StagiaireService } from '../services/stagiaire.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editer-stagiaire',
  templateUrl: './editer-stagiaire.component.html',
  styleUrls: ['./editer-stagiaire.component.scss']
})
export class EditerStagiaireComponent implements OnInit {

  stagiaire:Stagiaire

  constructor(private _st:StagiaireService,private _route: ActivatedRoute) { 
    let id:number = Number.parseInt(_route.snapshot.paramMap.get("id_St"))
    _st.trouverStagiaireParId(id).then((st:Stagiaire)=> {
      this.stagiaire=st;
    })
  }

  ngOnInit() {
  }

}
