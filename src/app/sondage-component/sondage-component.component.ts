import { Component, OnInit, Input } from '@angular/core';
import { Sondage } from '../domains';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sondage-component',
  templateUrl: './sondage-component.component.html',
  styleUrls: ['./sondage-component.component.scss']
})
export class SondageComponentComponent implements OnInit {

  @Input() sondage:Sondage

  constructor(private router: Router) { }

  quandOnClique()
  {
    this.router.navigate([`#`])
  }

  ngOnInit() {
  }

}
