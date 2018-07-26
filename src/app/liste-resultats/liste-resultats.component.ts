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
     this.idStagiaire = Number.parseInt(_route.snapshot.paramMap.get("id"))	     this.idStagiaire = Number.parseInt(_route.snapshot.paramMap.get("id"))
-    sondageservice.listerSondages(this.idStagiaire).then((sondages:any) => {	+    resultatSondageService.listerResultatSondageStagiaire(this.idStagiaire).then((resultatSondage:any) => {
-      sondages.forEach(sondage => {	+      resultatSondage.forEach(resultatsondage => {
-        this.listeSondages.push(sondage);	+        this.listeResultatSondage.push(resultatsondage);
       });	       });
     });	     });
    }	    }

  ngOnInit() {
  }
  
  affichageResultatSondage(id:string){
    this.router.navigate([`/${this.stagiaire.id}/resultats/${id}`])
  }
}
