import { Component, OnInit, Input } from '@angular/core';
import { Stagiaire, Sondage, ResultatSondage } from '../domains';
import { ActivatedRoute } from '@angular/router';
import { StagiaireService } from '../services/stagiaire.service';
import { SondageService } from '../services/sondage.service';
import { ResultatSondageService } from '../services/resultat-sondage.service';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.scss']
})
export class ResultatsComponent implements OnInit {

    unSondages:Sondage=undefined;
    stagiaire:Stagiaire = new Stagiaire(undefined,undefined,undefined,undefined,undefined)
    listeResultatSondage:ResultatSondage[]=[]

    public chartType:string = 'bar'

    public chartDatasets:any[] = [{data:[]}];

    public chartColors:Array<any> = [
        {
            backgroundColor: ['rgba(255, 99, 132, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)'],
            borderWidth: 2,
            pointBackgroundColor: ['rgba(255, 99, 132, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)'],
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: ['rgba(255, 99, 132, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)'],
        },
    ];

    public chartLabels:Array<any> = [];


    public chartOptions:any = {
        responsive: true
    };
    public chartClicked(e: any): void { }
    public chartHovered(e: any): void { } 
  
    constructor(private _listeSd:SondageService,private resultatSondageService:ResultatSondageService,private _st:StagiaireService,private _route: ActivatedRoute) 
    {
      let id_Sd:number = Number.parseInt(_route.snapshot.paramMap.get("id_Sd"))
      let id_St:number = Number.parseInt(_route.snapshot.paramMap.get("id_St"))

      _listeSd.listerSondagesbyid(id_Sd).then((sondages:Sondage) => {
        this.unSondages = sondages ;

        resultatSondageService.listerResultatSondagebySd(id_Sd).then((resultatSondage:any) => {
            resultatSondage.forEach(resultatsondage => {
              this.listeResultatSondage.push(resultatsondage);
            });
          });
        
        this.chartLabels = this.unSondages.options.map(element => element.libelle);
        this.chartDatasets = [{data:[81,60,12]}];
        console.log( this.chartDatasets)

      });
      _st.trouverStagiaireParId(id_St).then((st:Stagiaire)=> {
        this.stagiaire=st;
      })
    }


  ngOnInit() {
   
  }

}
