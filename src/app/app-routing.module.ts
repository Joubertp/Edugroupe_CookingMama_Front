import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { RecetteComponent } from './components/recette/recette.component'
import { RecettesComponent } from './components/recettes/recettes.component'
import { RecetteRechercheComponent } from './components/recette-recherche/recette-recherche.component'
import { UserProfileComponent } from './components/user-profile/user-profile.component'


const routes: Routes = [
  {path: 'recettes', component: RecettesComponent},
  {path: 'recettes/:id', component: RecetteComponent},
  {path: 'recettes-recherche', component: RecetteRechercheComponent},
  {path: 'user/:id', component: UserProfileComponent},
  { path: '', pathMatch:'full', redirectTo: '/recettes'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
