import { Component, OnInit,Input } from '@angular/core';
import { Stagiaire } from '../domains';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stagiaire-component',
  templateUrl: './stagiaire-component.component.html',
  styleUrls: ['./stagiaire-component.component.scss']
})
export class StagiaireComponentComponent implements OnInit {

  @Input() stagiaire:Stagiaire
  

  constructor(private router: Router) { 
  }

  quandOnClique()
  {
    this.router.navigate([`/${this.stagiaire.id}/sondages`])
  }

  ngOnInit() {
  }
  

}
