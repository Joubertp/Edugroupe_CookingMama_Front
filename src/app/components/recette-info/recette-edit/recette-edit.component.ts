import { Component, OnInit } from '@angular/core';
import { IngredientRepositoryService } from 'src/app/services/ingredient-repository.service';
import { Ingredient } from 'src/app/metiers/ingredient';
import { RecetteRepositoryService } from 'src/app/services/recette-repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Recette } from 'src/app/metiers/recette';
import { IngredientRecette } from 'src/app/metiers/ingredientRecette';
import { EtapeRecette } from 'src/app/metiers/etapeRecette';

@Component({
  selector: 'app-recette-edit',
  templateUrl: './recette-edit.component.html',
  styleUrls: ['./recette-edit.component.css']
})
export class RecetteEditComponent implements OnInit {

  //liste de tous les ingredients possible
  //utilisé pour la selection d'ingredient
  ingredientsList: Ingredient[] = []

  recette: Recette

  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private recetteRep: RecetteRepositoryService,
    private ingredientRep: IngredientRepositoryService) { }

  ngOnInit() {
    this.recette = null
    this.activeRoute.params.subscribe(params => this.dataInit(params))

  }

  public dataInit(params) {
    let id: number = Number(params["id"])
    // console.log("params",params)
    this.ingredientRep.getList()
      .then(list => {
      this.ingredientsList = list
        return this.recetteRep.getRecetteById(id)
      })
      .then(r => {
        this.recette = r;
        r.listeEtapes.sort(function (a, b) { return a.numero - b.numero })
      })
  }

  public minToString(minutes: number) {
    if (minutes >= 60) {
      let hour = Math.floor(minutes / 60)
      minutes -= hour * 60
      if (minutes == 0)
        return hour + " h"
      else
        return hour + " h et " + minutes + " min"
    }
    return minutes + " min"
  }

  public goToUser(id: number) {
    this.router.navigateByUrl("utilisateurs/" + id)
  }



  public ingredDelet(index) {
    this.recette.ingredients.splice(index, 1)
  }

  public ajouterIngr() {
    this.recette.ingredients.push(
      IngredientRecette.newEmpty())
      // console.log(this.recette.ingredients[1].recette)
      // this.recette.ingredients[1].id=2
      // console.log(this.recette.ingredients[1].recette)

  }

  public ajouterEtapes() {
    let lastNumber = this.recette.listeEtapes.length + 1
    this.recette.listeEtapes.push(
      new EtapeRecette(lastNumber, " ")
    )
  }

  public etapeDelet(index) {
    this.recette.listeEtapes.splice(index, 1)
    for (let etape of this.recette.listeEtapes) {
      if (etape.numero > index)
        etape.numero--
    }
  }

  public save(){
    this.recetteRep.update(this.recette)
  }

}
