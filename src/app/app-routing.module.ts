import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { RecetteComponent } from './components/recette/recette.component'
import { RecetteListComponent } from './components/recette-list/recette-list.component'
import { RecetteRechercheComponent } from './components/recette-recherche/recette-recherche.component'


const routes: Routes = [
  {path: 'recettes', component: RecetteListComponent},
  {path: 'recettes/:id', component: RecetteComponent},
  {path: 'recettes-recherche', component: RecetteRechercheComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
