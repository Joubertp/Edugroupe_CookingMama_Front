import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/metiers/ingredient';

@Component({
  selector: 'app-recette-recherche',
  templateUrl: './recette-recherche.component.html',
  styleUrls: ['./recette-recherche.component.css']
})
export class RecetteRechercheComponent implements OnInit {

  ingredients : Ingredient[] = [
    {id: 1, nom: "lardon"},
    {id: 2, nom: "pâte à pizza"},
    {id: 3, nom: "fromage de chèvre long"},
    {id: 4, nom: "coulis de tomate"},
    {id: 5, nom: "roquefort"},
    {id: 6, nom: "mozzarella"}
  ]

  selectedIngr :  Ingredient[] = [] 


  constructor() {
  }
  
  ngOnInit() {

  }


}
