import { Component, OnInit, Input } from '@angular/core';
import { Stagiaire } from '../domains';
import { StagiaireService } from '../services/stagiaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-editer-st',
  templateUrl: './forms-editer-st.component.html',
  styleUrls: ['./forms-editer-st.component.scss']
})
export class FormsEditerStComponent implements OnInit {

  @Input() stagiaire:Stagiaire
 
  constructor(private _st:StagiaireService,private router: Router)
   {
    }

  ngOnInit() {
    
  }

 submit()
  {
    this._st.modifierStagiaire(this.stagiaire)
    this.router.navigate([`/${this.stagiaire.id}/sondages`])
  }

}