import { Component, OnInit, Input } from '@angular/core'
import { Ingredient } from 'src/app/metiers/ingredient'
import { RecetteRepositoryService } from 'src/app/services/recette-repository.service'

@Component({
  selector: 'app-recette-recherche',
  templateUrl: './recette-recherche.component.html',
  styleUrls: ['./recette-recherche.component.css']
})
export class RecetteRechercheComponent implements OnInit {

  ingredients: Ingredient[] = [
    { id: 1, nom: "lardon" },
    { id: 2, nom: "pâte à pizza" },
    { id: 3, nom: "fromage de chèvre long" },
    { id: 4, nom: "coulis de tomate" },
    { id: 5, nom: "roquefort" },
    { id: 6, nom: "mozzarella" }
  ]
  
  selectedIngr: Ingredient[] = []
  nomRecette : string

  constructor(private recetteRep: RecetteRepositoryService) {
  }

  ngOnInit() {
  }

  public rechercher(): void {
    console.log("recetteRep", this.recetteRep)
    console.log("nomRecette à recherche :",this.nomRecette )
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
