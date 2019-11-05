import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetteComponent } from './components/recette/recette.component';
import { RecetteListComponent } from './components/recette-list/recette-list.component';


const routes: Routes = [
  {path: 'recettes/:id', component: RecetteComponent},
  {path: 'recettes', component: RecetteListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
