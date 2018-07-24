import { Component, OnInit } from '@angular/core';
import { Sondage } from '../domains';
import { SondageService } from '../services/sondage.service';

@Component({
  selector: 'app-liste-sondages',
  templateUrl: './liste-sondages.component.html',
  styleUrls: ['./liste-sondages.component.scss']
})
export class ListeSondagesComponent implements OnInit {

  listeSondages:Sondage[]=[]

  constructor(private _listeSd:SondageService) 
  { 
    _listeSd.listerSondages().then((sondages:any) => {
      sondages.forEach(sondage => {
        this.listeSondages.push(sondage);
      });
    });
  }

  ngOnInit() {
  }

}
