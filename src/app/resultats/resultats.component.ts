import { Component, OnInit, Input } from '@angular/core';
import { Stagiaire } from '../domains';
import { ActivatedRoute } from '@angular/router';
import { StagiaireService } from '../services/stagiaire.service';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.scss']
})
export class ResultatsComponent implements OnInit {

  stagiaire:Stagiaire
  id_Sd:number

  constructor(private _st:StagiaireService,private _route: ActivatedRoute) {
    let id:number = Number.parseInt(_route.snapshot.paramMap.get("id_St"))
    console.log(id)
    this.id_Sd= Number.parseInt(_route.snapshot.paramMap.get("id_Sd"))

    _st.trouverStagiaireParId(id).then((st:Stagiaire)=> {
      this.stagiaire=st;
    })

   }

  ngOnInit() {
  }

}
