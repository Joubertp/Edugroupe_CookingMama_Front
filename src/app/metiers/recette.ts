import { IngredientRecette } from './ingredientRecette'
import { EtapeRecette } from './etapeRecette'

export class Recette {
    constructor(public id: number,
        public nom: string,
        public dateCreation: Date,
        public dateDerniereEdition: Date,
        public tempsPreparation: number,
        public tempsCuisson: number, 
        public ingredients: IngredientRecette[],
        public listeEtapes: EtapeRecette[]
        ){}

        public static emptyRecette() : Recette {
            return new Recette(0,"",null,null,0,0,[],[])
        } 
}