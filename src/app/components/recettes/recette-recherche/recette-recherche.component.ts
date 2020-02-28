import { Component, OnInit, Input } from '@angular/core'
import { Ingredient } from 'src/app/metiers/ingredient'
import { RecetteRepositoryService } from 'src/app/services/recette-repository.service'
import { IngredientRepositoryService } from 'src/app/services/ingredient-repository.service'

@Component({
  selector: 'app-recette-recherche',
  templateUrl: './recette-recherche.component.html',
  styleUrls: ['./recette-recherche.component.css']
})
export class RecetteRechercheComponent implements OnInit {

  ingredients: Ingredient[] = []
  
  selectedIngr: Ingredient[] = []
  nomRecette : string

  constructor(private recetteRep: RecetteRepositoryService, 
    private ingredientRep : IngredientRepositoryService) {
  }

  ngOnInit() {
    this.ingredientRep.getList()
      .then(list => this.ingredients = list)
  }

  public rechercher(): void {
    // console.log("recetteRep", this.recetteRep)
    // console.log("nomRecette à recherche :",this.nomRecette )
    let idList = []
    for (let ingredient of this.selectedIngr) {
      idList.push(ingredient.id)
    }
    this.recetteRep.setIdIngredients(idList)
    this.recetteRep.setNomRecette(this.nomRecette)
    if (this.recetteRep.getNoPage() != 0)
      this.recetteRep.setNoPage(0)
    else
      this.recetteRep.refreshList()
  }


}
