import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { ChoixStagiaireComponent } from './choix-stagiaire/choix-stagiaire.component';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { StagiaireComponentComponent } from './stagiaire-component/stagiaire-component.component';
import { ListeStagiairesComponentComponent } from './liste-stagiaires-component/liste-stagiaires-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChoixStagiaireComponent,
    BandeauComponentComponent,
    StagiaireComponentComponent,
    ListeStagiairesComponentComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


