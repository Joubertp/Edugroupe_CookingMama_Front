import { Ingredient } from './ingredient';

export class IngredientFournisseur {

    constructor(
        public id : number,
        public libelle : string,
        public prix : number,
        public infos : string,
        public ingredient? : Ingredient
    ) {}

}