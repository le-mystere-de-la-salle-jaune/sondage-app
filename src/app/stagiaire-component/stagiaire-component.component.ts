import { Component, OnInit,Input } from '@angular/core';
import { Stagiaire } from '../domains';

@Component({
  selector: 'app-stagiaire-component',
  templateUrl: './stagiaire-component.component.html',
  styleUrls: ['./stagiaire-component.component.scss']
})
export class StagiaireComponentComponent implements OnInit {

  @Input() stagiaire:Stagiaire
  

  constructor() { 
    this.stagiaire = new Stagiaire('Jean','Dujardin','https://img2.closermag.fr/var/closermag/storage/images/bio-people/biographie-jean-dujardin-112277/815517-1-fre-FR/Jean-Dujardin_square500x500.jpg') 
  }

  ngOnInit() {
  }

}
