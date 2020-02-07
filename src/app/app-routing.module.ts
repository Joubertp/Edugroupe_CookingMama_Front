import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { RecetteInfoComponent } from './components/recette-info/recette-info.component'
import { RecettesComponent } from './components/recettes/recettes.component'
import { RecetteRechercheComponent } from './components/recettes/recette-recherche/recette-recherche.component'
import { UtilisateursListComponent } from './components/utilisateurs/utilisateurs-list/utilisateurs-list.component'
import { UtilisateurProfileComponent } from './components/utilisateur-profile/utilisateur-profile.component'


const routes: Routes = [
  {path: 'recettes', component: RecettesComponent},
  {path: 'recettes/:id', component: RecetteInfoComponent},
  {path: 'recettes-recherche', component: RecetteRechercheComponent},
  {path: 'utilisateurs/:id', component: UtilisateurProfileComponent},
  {path: 'utilisateurs', component: UtilisateursListComponent},
  { path: '', pathMatch:'full', redirectTo: '/recettes'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
