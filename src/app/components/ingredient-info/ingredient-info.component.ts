import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/metiers/ingredient';
import { IngredientRepositoryService } from 'src/app/services/ingredient-repository.service';
import { IngredientFournisseurRepositoryService } from 'src/app/services/ingredient-fournisseur-repository.service';
import { IngredientFournisseur } from 'src/app/metiers/ingredientFournisseur';

@Component({
  selector: 'app-ingredient-info',
  templateUrl: './ingredient-info.component.html',
  styleUrls: ['./ingredient-info.component.css']
})
export class IngredientInfoComponent implements OnInit {

  public ingredient : Ingredient;
  public ingredientsFournisseurs : IngredientFournisseur[];

  constructor(private activeRoute : ActivatedRoute,
              private ingredientRep : IngredientRepositoryService,
              private ingredientFournRep : IngredientFournisseurRepositoryService) { }

  ngOnInit() {
    this.ingredient = null;
    this.ingredientsFournisseurs = null;
    this.activeRoute.params.subscribe(params => this.dataInit(params));
  }

  public dataInit(params : any) {
    let id : number = Number(params["id"]);
    this.ingredientRep.getIngredientById(id).then(ing => { 
                            this.ingredient = ing;
                            this.ingredientFournRep.getIngredientsFournisseursByIngredientId(ing.id).then(ingFour => { 
                                      this.ingredientsFournisseurs = ingFour
                                      console.log(this.ingredientsFournisseurs)    
                            })
     });
  }

}
