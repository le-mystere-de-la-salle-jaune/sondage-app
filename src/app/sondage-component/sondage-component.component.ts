import { Component, OnInit, Input } from '@angular/core';
import { Sondage, OptionsSondage, Stagiaire } from '../domains';
import { Router, ActivatedRoute } from '@angular/router';
import { SondageService } from '../services/sondage.service';
import { StagiaireService } from '../services/stagiaire.service';

@Component({
  selector: 'app-sondage-component',
  templateUrl: './sondage-component.component.html',
  styleUrls: ['./sondage-component.component.scss']
})
export class SondageComponentComponent implements OnInit {


sondage:Sondage
stagiaire:Stagiaire
optionSondage:OptionsSondage[]
idReponse:number


  constructor(private _st:StagiaireService,private _sd:SondageService,private _route: ActivatedRoute,private router: Router) {
    let id_Sd:number = Number.parseInt(_route.snapshot.paramMap.get("id_Sd"))
    let id_St:number = Number.parseInt(_route.snapshot.paramMap.get("id_St"))

    _sd.listerSondagesById(id_Sd).then((sd:Sondage)=> {
      this.sondage=sd;
      this.optionSondage = this.sondage.options
    })

    _st.trouverStagiaireParId(id_St).then((st:Stagiaire)=> {
      this.stagiaire=st;
    })
   }


  ngOnInit() {
  }

  submit()
  {
    this.router.navigate([`/${this.stagiaire.id}/sondages`])
  }

}
