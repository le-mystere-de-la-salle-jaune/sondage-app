import { Component, OnInit } from '@angular/core';
import { Sondage, Stagiaire } from '../domains';
import { SondageService } from '../services/sondage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/router';
import { StagiaireService } from '../services/stagiaire.service';


@Component({
  selector: 'app-liste-resultats',
  templateUrl: './liste-resultats.component.html',
  styleUrls: ['./liste-resultats.component.scss']
})
export class ListeResultatsComponent implements OnInit {

  listeSondages:Sondage[]=[]
  stagiaire:Stagiaire

    constructor(private _listeSd:SondageService,private _st:StagiaireService,private _route: ActivatedRoute,private router: Router) 
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
  
  affichageResultatSondage(id:string){
    this.router.navigate([`/${this.stagiaire.id}/resultats/${id}`])
  }
}