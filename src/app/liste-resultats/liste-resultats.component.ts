import { Component, OnInit } from '@angular/core';
import { ResultatSondage, Stagiaire } from '../domains';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/router';
import { ResultatSondageService } from '../services/resultat-sondage.service';
import { StagiaireService } from '../services/stagiaire.service';


@Component({
  selector: 'app-liste-resultats',
  templateUrl: './liste-resultats.component.html',
  styleUrls: ['./liste-resultats.component.scss']
})
export class ListeResultatsComponent implements OnInit {

  listeResultatSondage:ResultatSondage[]=[]
  idStagiaire:number
  stagiaire:Stagiaire = new Stagiaire(undefined,undefined,undefined,undefined,undefined);
  saisi:string;

  constructor(private resultatSondageService:ResultatSondageService,private _st:StagiaireService,private _route: ActivatedRoute,private router: Router) {

    let id:number = Number.parseInt(_route.snapshot.paramMap.get("id_St"))

    _st.trouverStagiaireParId(id).then((st:Stagiaire)=> {
      this.stagiaire=st;
    })
    
    resultatSondageService.listerResultatSondageStagiaire(Number.parseInt(_route.snapshot.paramMap.get("id_St"))).then((resultatSondage:any) => {
      resultatSondage.forEach(resultatsondage => {
        this.listeResultatSondage.push(resultatsondage);
      });
    });
    
    

   
    
   }

  

  ngOnInit() {
  }
  
  affichageResultatSondage(id:number){
    this.router.navigate([`/${this.stagiaire.id}/resultats/${id}`])
  }
}