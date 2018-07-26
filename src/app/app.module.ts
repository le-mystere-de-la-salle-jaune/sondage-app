import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { ChoixStagiaireComponent } from './choix-stagiaire/choix-stagiaire.component';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { StagiaireComponentComponent } from './stagiaire-component/stagiaire-component.component';
import { ListeStagiairesComponentComponent } from './liste-stagiaires-component/liste-stagiaires-component.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ListeSondagesComponent } from './liste-sondages/liste-sondages.component';
import { FormsModule }   from '@angular/forms';
import { SondageComponentComponent } from './sondage-component/sondage-component.component';
import { ListeResultatsComponent } from './liste-resultats/liste-resultats.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { EditerStagiaireComponent } from './editer-stagiaire/editer-stagiaire.component';
import { FormsEditerStComponent } from './forms-editer-st/forms-editer-st.component';


const appRoutes: Routes = [
  { path: 'choix-stagiaire', component: ChoixStagiaireComponent },
  { path: ':id_St/editer', component: EditerStagiaireComponent },
  { path: ':id_St/sondages', component: ListeSondagesComponent },
  { path: ':id_St/sondages/:id_Sd', component: SondageComponentComponent },
  { path: ':id_St/resultats', component: ListeResultatsComponent },
  { path: ':id_St/resultats/:id_Sd', component: ResultatsComponent },
  { path: '',   redirectTo: '/choix-stagiaire', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ChoixStagiaireComponent,
    BandeauComponentComponent,
    StagiaireComponentComponent,
    ListeStagiairesComponentComponent,
    ListeSondagesComponent,

    SondageComponentComponent,
    ListeResultatsComponent,
    ResultatsComponent,
    EditerStagiaireComponent,
    FormsEditerStComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


