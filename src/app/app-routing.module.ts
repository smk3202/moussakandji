import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './Components/Auth/inscription/inscription.component';
import { ConnexionComponent } from './Components/Auth/connexion/connexion.component';
import { MotdepasseComponent } from './Components/Auth/motdepasse/motdepasse.component';
import { MotdepasseoublierComponent } from './Components/Auth/motdepasseoublier/motdepasseoublier.component';
import { DashboardComponent } from './Components/Auth/dashboard/dashboard.component';
import { FormulaireComponent } from './Components/Auth/Formulaire/Formulaire.component';

const routes: Routes = [
  {
    path: 'n',
    component: InscriptionComponent
  },
  {
    path: 'Connexion',
    component: ConnexionComponent
  },
  {
    path: 'motdepasse',
    component: MotdepasseComponent
  },
  {
    path: 'motdepasseoublier',
    component: MotdepasseoublierComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'Formulaire',
    component: FormulaireComponent
  }
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
