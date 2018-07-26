import { Component, OnInit, Input } from '@angular/core';
import { Stagiaire } from '../domains';
import { ActivatedRoute } from '@angular/router';
import { StagiaireService } from '../services/stagiaire.service';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.scss']
})
export class ResultatsComponent implements OnInit {


    public chartType:string = 'bar';

    public chartDatasets:Array<any> = [
        {data: [81], label: 'My First dataset'},
        {data: [28], label: 'My Second dataset'}
    ];

    public chartLabels:Array<any> = ['Jan'];

    public chartColors:Array<any> = [
        {
            backgroundColor: 'rgba(220,220,220,0.2)',
            borderColor: 'rgba(220,220,220,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
        {
            backgroundColor: 'rgba(151,187,205,0.2)',
            borderColor: 'rgba(151,187,205,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(151,187,205,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        }
    ];

    public chartOptions:any = {
        responsive: true
    };
    public chartClicked(e: any): void { }
    public chartHovered(e: any): void { }
  
  constructor() { }


  ngOnInit() {
  }

}
