import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { RecetteInfoComponent } from './components/recette-info/recette-info.component'
import { RecettesComponent } from './components/recettes/recettes.component'
import { RecetteRechercheComponent } from './components/recettes/recette-recherche/recette-recherche.component'
import { UtilisateursListComponent } from './components/utilisateurs/utilisateurs-list/utilisateurs-list.component'
import { UtilisateurProfileComponent } from './components/utilisateur-profile/utilisateur-profile.component'
import { SignupComponent } from './components/signup/signup.component'
import { RecetteEditComponent } from './components/recette-info/recette-edit/recette-edit.component'

const routes: Routes = [
  {path: 'recettes', component: RecettesComponent},
  {path: 'recettes/:id', component: RecetteInfoComponent},
  {path: 'recettes/:id/edit', component: RecetteEditComponent},
  {path: 'recettes-recherche', component: RecetteRechercheComponent},
  {path: 'utilisateurs/:id', component: UtilisateurProfileComponent},
  {path: 'utilisateurs', component: UtilisateursListComponent},
  {path: 'signup', component: SignupComponent},
  { path: '', pathMatch:'full', redirectTo: '/recettes'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
