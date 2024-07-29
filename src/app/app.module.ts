import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './Components/Auth/inscription/inscription.component';
import { ConnexionComponent } from './Components/Auth/connexion/connexion.component';
import { MotdepasseComponent } from './Components/Auth/motdepasse/motdepasse.component';
import { MotdepasseoublierComponent } from './Components/Auth/motdepasseoublier/motdepasseoublier.component';
import { DashboardComponent } from './Components/Auth/dashboard/dashboard.component';
import { FormulaireComponent } from './Components/Auth/Formulaire/Formulaire.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    MotdepasseComponent,
    MotdepasseoublierComponent,
    DashboardComponent,
    FormulaireComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
