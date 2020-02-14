import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/metiers/ingredient';
import { IngredientRepositoryService } from 'src/app/services/ingredient-repository.service';

@Component({
  selector: 'app-ingredient-info',
  templateUrl: './ingredient-info.component.html',
  styleUrls: ['./ingredient-info.component.css']
})
export class IngredientInfoComponent implements OnInit {

  public ingredient : Ingredient;

  constructor(private activeRoute : ActivatedRoute,
              private ingredientRep : IngredientRepositoryService) { }

  ngOnInit() {
    this.ingredient = null;
    this.activeRoute.params.subscribe(params => this.dataInit(params));
  }

  public dataInit(params : any) {
    let id : number = Number(params["id"]);
    this.ingredientRep.getIngredientById(id).then(ing => this.ingredient = ing);
  }

}
