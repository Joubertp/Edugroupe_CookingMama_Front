import { Component, OnInit, ViewChild } from '@angular/core';
import { Recette } from 'src/app/metiers/recette';
import { Page } from 'src/app/metiers/page';
import { Subscription } from 'rxjs';
import { RecetteRepositoryService } from 'src/app/services/recette-repository.service';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/metiers/ingredient';
import { RecetteRechercheComponent } from './../recette-recherche/recette-recherche.component'
import { IngredientRecette } from 'src/app/metiers/ingredientRecette';


@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.css']
})
export class RecetteListComponent implements OnInit {

  @ViewChild(RecetteRechercheComponent, {static: false}) child: RecetteRechercheComponent

  recettes: Page<Recette>
  // pagination
  noPage: number
  taillePage: number
  totalItems: number
  private recetteSub: Subscription

  constructor(private recetteRep: RecetteRepositoryService,
    private router: Router) { }

  ngOnInit() {

    this.noPage = 1
    this.taillePage = 10
    this.totalItems = 0

    this.recetteSub = this.recetteRep.getObeservablePage()
      .subscribe(r => {
        console.log(r)
        this.noPage = r.number + 1
        this.taillePage = r.size
        this.totalItems = r.totalElements
        this.recettes = r
      })
      
  }

  public pageChanged(event): void {
    this.recetteRep.setNoPage(event.page - 1);
  }

  public goTo(id: number): void {
    this.router.navigateByUrl("recettes/" + id)
  }

  public getIngredientsRecherche(): Ingredient[] {
    return this.child.selectedIngr
  }
  public rechercher(): void {
    this.noPage = 1
    let ingredientList = this.child.selectedIngr
    if(ingredientList.length === 0){
      this.recetteRep.setIdIngredients([])
    } else {
      let idIngredients = []
      for(let ingredient of ingredientList){
        idIngredients.push(ingredient.id)
      }
      console.log(idIngredients)
      this.recetteRep.setIdIngredients(idIngredients)
    }
  }


}
