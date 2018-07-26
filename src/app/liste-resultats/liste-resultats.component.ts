import { Component, OnInit } from '@angular/core';
import { ResultatSondage } from '../domains';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/router';
import { ResultatSondageService } from '../services/resultat-sondage.service';


@Component({
  selector: 'app-liste-resultats',
  templateUrl: './liste-resultats.component.html',
  styleUrls: ['./liste-resultats.component.scss']
})
export class ListeResultatsComponent implements OnInit {

  listeResultatSondage:ResultatSondage[]=[]
  idStagiaire:number

  constructor(private resultatSondageService:ResultatSondageService,private _route: ActivatedRoute,private router: Router) {
    this.idStagiaire = Number.parseInt(_route.snapshot.paramMap.get("id"))
    resultatSondageService.listerResultatSondageStagiaire(this.idStagiaire).then((resultatSondage:any) => {
      resultatSondage.forEach(resultatsondage => {
        this.listeResultatSondage.push(resultatsondage);
      });
    });
   }

  ngOnInit() {
  }
  
  afiichageResultatSondage(id:string){
    let idNumeriser = Number.parseInt(id)
    this.router.navigate([`/${this.idStagiaire}/resultats/${idNumeriser}`])
  }
}
