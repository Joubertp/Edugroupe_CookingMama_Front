import { Recette } from './recette';
import { Ingredient } from './ingredient';

export class IngredientRecette {
    constructor(
        public id: number,
        public text: string,
        public quantite : number,
        public recette: Recette,
        public idIngredient: number
    ) {}

    public static newEmpty() : IngredientRecette {
        return new IngredientRecette(0,"",0,null,0)
    }
}