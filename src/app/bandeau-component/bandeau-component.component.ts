import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandeau-component',
  templateUrl: './bandeau-component.component.html',
  styleUrls: ['./bandeau-component.component.scss']
})
export class BandeauComponentComponent implements OnInit {

  titre : string;
  description : string;

  constructor() {

    this.titre = "Choose your stagiaire";
    this.description = "Cette page consiste à choisir le stagiaire qui realisera le sondage";

   }

  ngOnInit() {
  }

}
