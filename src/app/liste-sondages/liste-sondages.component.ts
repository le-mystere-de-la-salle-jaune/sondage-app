import { Component, OnInit } from '@angular/core';
import { Sondage } from '../domains';
import { SondageService } from '../services/sondage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-sondages',
  templateUrl: './liste-sondages.component.html',
  styleUrls: ['./liste-sondages.component.scss']
})
export class ListeSondagesComponent implements OnInit {

  listeSondages:Sondage[]=[]

  constructor(private _listeSd:SondageService,private _route: ActivatedRoute) {
    let id:number = Number.parseInt(_route.snapshot.paramMap.get("id"))
    _listeSd.listerSondages(id).then((sondages:any) => {
      sondages.forEach(sondage => {
        this.listeSondages.push(sondage);
      });
    });
  }

  ngOnInit() {
  }

}
