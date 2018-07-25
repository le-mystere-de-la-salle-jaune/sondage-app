import { Component, OnInit } from '@angular/core';
import { Sondage } from '../domains';
import { SondageService } from '../services/sondage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/router';


@Component({
  selector: 'app-liste-resultats',
  templateUrl: './liste-resultats.component.html',
  styleUrls: ['./liste-resultats.component.scss']
})
export class ListeResultatsComponent implements OnInit {

  listeSondages:Sondage[]=[]
  idStagiaire:number
  constructor(private sondageservice:SondageService,private _route: ActivatedRoute,private router: Router) {
    this.idStagiaire = Number.parseInt(_route.snapshot.paramMap.get("id"))
    sondageservice.listerSondages(this.idStagiaire).then((sondages:any) => {
      sondages.forEach(sondage => {
        this.listeSondages.push(sondage);
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