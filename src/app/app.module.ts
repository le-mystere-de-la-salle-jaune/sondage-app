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
import { SondageComponentComponent } from './sondage-component/sondage-component.component';
import { ListeResultatsComponent } from './liste-resultats/liste-resultats.component';

const appRoutes: Routes = [
  { path: 'choix-stagiaire', component: ChoixStagiaireComponent },
  { path: ':id/sondages', component: ListeSondagesComponent },
  { path: ':id/Resultats', component: ListeResultatsComponent },
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
    ListeResultatsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


