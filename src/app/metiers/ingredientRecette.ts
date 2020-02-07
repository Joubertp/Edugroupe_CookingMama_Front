import { Recette } from './recette';
import { Ingredient } from './ingredient';

export class IngredientRecette {
    constructor(
        public id: number,
        public recette: Recette,
        public ingredient: Ingredient
    ) {}

    public static emptyIngredientRecette() : IngredientRecette {
        return new IngredientRecette(0,null,null)
    }
}